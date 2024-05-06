import { useEffect, useRef } from "react";

import GContext from "@/webgl/GContext";
import vCode from "@/webgl/glsl/id.vert?raw";
import fCode from "@/webgl/glsl/background.frag?raw";

const setAnimation = (step: () => void): (() => void) => {
  let shouldStop = false;
  const f = () => {
    if (shouldStop) return;
    step();
    requestAnimationFrame(f);
  };
  requestAnimationFrame(f);
  return () => (shouldStop = true);
};

export interface BackgroundProps extends React.ComponentProps<"canvas"> {}

const Background: React.FC<BackgroundProps> = ({ ...restProps }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const clearFuncs: (() => void)[] = [];

    const canvas = canvasRef.current;
    if (canvas == null) return;

    const context = GContext.gen(canvas);
    if (context == null) return;

    const gl = context.gl; // TODO: Unuse WebGL APIs directly in this component

    const program = context.createProgram(vCode, fCode);
    if (program == null) return;

    const location = {
      attribute: {
        position: gl.getAttribLocation(program, "position"),
      },
      uniform: {
        timeSecs: gl.getUniformLocation(program, "timeSecs"),
        resolution: gl.getUniformLocation(program, "resolution"),
      },
    };

    // prettier-ignore
    const positions = [
      // x, y, z
      -1, +1,  0,
      -1, -1,  0,
      +1, +1,  0,
      +1, -1,  0,
    ];

    const positionVbo = context.createVbo(positions);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionVbo);
    gl.enableVertexAttribArray(location.attribute.position);
    gl.vertexAttribPointer(
      location.attribute.position,
      3,
      gl.FLOAT,
      false,
      0,
      0,
    );
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    const startTime = Date.now();

    const mainStep = () => {
      const timeSecs = (Date.now() - startTime) * 0.001;

      gl.useProgram(program);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      context.clear();
      context.fitSize();

      gl.uniform1f(location.uniform.timeSecs, timeSecs);
      gl.uniform2fv(location.uniform.resolution, [canvas.width, canvas.height]);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      gl.flush();
    };

    clearFuncs.push(setAnimation(mainStep));

    return () => clearFuncs.forEach((f) => f());
  });

  return <canvas {...restProps} ref={canvasRef}></canvas>;
};

export default Background;
