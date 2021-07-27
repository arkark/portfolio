import { LayoutProps, PositionProps, chakra } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

import GContext from "@/webgl/GContext";
import idVCode from "@/webgl/glsl/id.vert";
import mainFCode from "@/webgl/glsl/main.frag";

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

export interface BioIconProps {
  w: LayoutProps["w"];
  h: LayoutProps["h"];
  contentW: number;
  contentH: number;
  position?: PositionProps["position"];
}

const BioIcon: React.VFC<BioIconProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const clearFuncs: (() => void)[] = [];

    const canvas = canvasRef.current;
    if (canvas == null) return;

    const context = GContext.gen(canvas);
    if (context == null) return;

    const gl = context.gl; // TODO: Unuse WebGL APIs directly in BioIcon.tsx

    const program = context.createProgram(idVCode, mainFCode);
    if (program == null) return;

    const location = {
      attribute: {
        position: gl.getAttribLocation(program, "position"),
      },
      uniform: {
        timeSecs: gl.getUniformLocation(program, "timeSecs"),
        resolution: gl.getUniformLocation(program, "resolution"),
        contentResolution: gl.getUniformLocation(program, "contentResolution"),
        arkTexture: gl.getUniformLocation(program, "arkTexture"),
      },
    };

    let arkTexture: WebGLTexture | null = null;
    context
      .createTexture("/image/ark.png", {
        magFilter: gl.LINEAR,
        minFilter: gl.LINEAR_MIPMAP_LINEAR,
        wrap: gl.CLAMP_TO_EDGE,
        useMipmap: true,
      })
      .then((texture) => {
        arkTexture = texture;
      });

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
      0
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
      gl.uniform2fv(location.uniform.contentResolution, [
        props.contentW * context.ratio,
        props.contentH * context.ratio,
      ]);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, arkTexture);
      gl.uniform1i(location.uniform.arkTexture, 0);
      gl.activeTexture(gl.TEXTURE1);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      gl.flush();
    };

    clearFuncs.push(setAnimation(mainStep));

    return () => clearFuncs.forEach((f) => f());
  });

  const Canvas = chakra("canvas");
  return (
    <Canvas
      w={props.w}
      h={props.h}
      position={props.position}
      zIndex={-100}
      ref={canvasRef}
    ></Canvas>
  );
};

export default BioIcon;
