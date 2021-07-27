import TextureConf from "@/webgl/TextureConf";

export default class GContext {
  // private gl: WebGLRenderingContext;
  gl: WebGLRenderingContext; // TODO: add `private`

  private constructor(gl: WebGLRenderingContext) {
    this.gl = gl;
  }

  static gen = (canvas: HTMLCanvasElement): GContext | null => {
    const gl = canvas.getContext("webgl");
    if (gl == null) return null;
    return new GContext(gl);
  };

  clear(): void {
    this.gl.clearColor(0, 0, 0, 1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

  fitSize(): void {
    const width = Math.round(this.gl.canvas.clientWidth * this.ratio) | 0;
    const height = Math.round(this.gl.canvas.clientHeight * this.ratio) | 0;
    this.gl.canvas.width = width;
    this.gl.canvas.height = height;
    this.gl.viewport(0, 0, width, height);
  }

  get ratio() {
    return window.devicePixelRatio;
  }

  private createShader(code: string, shaderType: number): WebGLShader | null {
    if (
      shaderType != this.gl.VERTEX_SHADER &&
      shaderType != this.gl.FRAGMENT_SHADER
    )
      return null;
    const shader = this.gl.createShader(shaderType);
    if (shader == null) return null;
    this.gl.shaderSource(shader, code);
    this.gl.compileShader(shader);
    if (this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      return shader;
    } else {
      console.warn(this.gl.getShaderInfoLog(shader));
      return null;
    }
  }

  createProgram(vCode: string, fCode: string): WebGLProgram | null {
    const vs = this.createShader(vCode, this.gl.VERTEX_SHADER);
    if (vs == null) return null;
    const fs = this.createShader(fCode, this.gl.FRAGMENT_SHADER);
    if (fs == null) return null;

    const program = this.gl.createProgram();
    if (program == null) return null;
    this.gl.attachShader(program, vs);
    this.gl.attachShader(program, fs);
    this.gl.linkProgram(program);
    if (this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      this.gl.deleteShader(vs);
      this.gl.deleteShader(fs);
      return program;
    } else {
      console.warn(this.gl.getProgramInfoLog(program));
      return null;
    }
  }

  createVbo(data: number[]): WebGLBuffer | null {
    const vbo = this.gl.createBuffer();
    if (vbo == null) return null;
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vbo);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(data),
      this.gl.STATIC_DRAW
    );
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    return vbo;
  }

  private enableTextureConf(conf: TextureConf): void {
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      conf.magFilter
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      conf.minFilter
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      conf.wrap
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      conf.wrap
    );
    if (conf.useMipmap) {
      this.gl.generateMipmap(this.gl.TEXTURE_2D);
    }
  }

  createTexture(src: string, conf: TextureConf): Promise<WebGLTexture> {
    const image = new Image();
    return new Promise((resolve, reject) => {
      image.onload = () => {
        const texture = this.gl.createTexture();
        if (texture == null) return;
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        this.gl.texImage2D(
          this.gl.TEXTURE_2D,
          0,
          this.gl.RGBA,
          this.gl.RGBA,
          this.gl.UNSIGNED_BYTE,
          image
        );
        this.enableTextureConf(conf);
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        resolve(texture);
      };
      image.onerror = reject;
      image.src = src;
    });
  }

  createFrameBuffer(
    width: number,
    height: number,
    textureConf: TextureConf
  ): { buffer: WebGLFramebuffer | null; texture: WebGLTexture | null } {
    const frameBuffer = this.gl.createFramebuffer();
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, frameBuffer);

    const texture = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      width,
      height,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      null
    );
    this.enableTextureConf(textureConf);

    this.gl.framebufferTexture2D(
      this.gl.FRAMEBUFFER,
      this.gl.COLOR_ATTACHMENT0,
      this.gl.TEXTURE_2D,
      texture,
      0
    );

    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

    return {
      buffer: frameBuffer,
      texture,
    };
  }
}
