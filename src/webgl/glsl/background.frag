precision mediump float;

uniform float timeSecs;
uniform vec2 resolution;

const float PI = 3.141592653589793;
const float PI_2 = PI*2.;

vec3 distort(vec2 p, float t) {
  const int depth = 8;
  float power = 0.12 + (sin(t*5.)*.5+.5)*.04;
  for (int i = 1; i < depth; i += 1) {
    // ref. https://viclw17.github.io/2018/06/12/GLSL-Practice-With-Shadertoy
    p.x += power * sin(1.5*float(i)*p.y + (t*1.1)) - t*.25;
    p.y += power * cos(1.8*float(i)*p.x + (t*1.7)) + t*.1;
  }
  return p.xyx;
}

vec3 palette(vec3 t) {
  vec3 a = vec3(.90, .96, .98);
  vec3 b = vec3(.04, .02, .04);
  vec3 c = vec3(1., 1.2, 1.);
  vec3 d = vec3(2./3., 0./3., 1./3.);
  return a + b*cos(PI_2*(c*t + d));
}

void main(void) {
  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

  vec3 col = palette(2.*distort(p, timeSecs*.2) + vec3(2./3., 0./3., 1./3.)*PI_2 + timeSecs);
  gl_FragColor = vec4(col, 1.);
}
