/*
#2
Using functions to create a more interesting shader
*/


#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


float plot(vec2 st, float pct){
  return  smoothstep(pct - 0.02, pct, st.y) -
          smoothstep(pct, pct + 0.02, st.y);
}


void main() {
    vec2 st = gl_FragCoord.xy/u_resolution;
    float x = st.x;

    //time-dependent scalars
    float tsy = sin(u_time) + 1.0;
    float tsx = cos(u_time) + 1.0;

    //shaping function: semicircle w/ r=0.5, c=(0, 0.5)
    float y = sqrt(0.25 - pow(tsx * x - 0.5, 2.0)) * tsy;
    vec3 color = vec3(y, y, 1.0);

    //plotter
    // float pct = plot(st,y);
    // color = (1.0 - pct) * color + pct * vec3(0.051, 1.0, 0.0);

    gl_FragColor = vec4(color,1.0);
}