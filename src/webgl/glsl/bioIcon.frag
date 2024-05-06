precision mediump float;

uniform float timeSecs;
uniform vec2 resolution;
uniform sampler2D arkTexture;

const float PI = 3.141592653589793;
const float PI_2 = PI*2.;

// [0, 1] -> [0, 1]
float easeIn(float t) {
  return t*t*t*t;
}

// [0, 1] -> [0, 1]
float easeInOut(float t) {
  if (t < 0.5) {
    return easeIn(2.*t)/2.;
  } else {
    return 1. - easeIn(2. - 2.*t)/2.;
  }
}

mat2 rot(float theta) {
  return mat2(cos(theta), sin(theta), -sin(theta), cos(theta));
}

vec4 ark(vec2 p, float r, float power) {
  float alpha = 1.;
  float len = length(p);
  if (len > r) {
    p *= r/len;
    alpha = exp(-(len - r)*power);
  }

  vec2 uv = (p / (2.*r)) + .5;
  uv.y = 1. - uv.y;
  vec4 color = texture2D(arkTexture, uv);
  color.a *= alpha;
  return color;
}

void main(void) {
  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
  float t = timeSecs*.5;
  float r = .8;

  float delay = pow(min(1., length(p)/r), .4);
  p *= rot(-(floor(t) + easeInOut(mod(t, 1.))*(1. - delay*(1. - mod(t, 1.))))*PI_2/3.);

  gl_FragColor = ark(p, r, 25.);
}
