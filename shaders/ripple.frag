#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;


void main() {
    vec2 fragPos = gl_FragCoord.xy/u_resolution;
    vec2 mousePos = u_mouse / u_resolution;

    vec2 center = vec2(0.5, 0.5);

    float dist = length(fragPos - mousePos);
    float opacity = 0.5 - 0.1 * sin(25.0 * (1.0 - dist) + 3.0 * u_time);

    
    vec4 color = vec4(dist, dist, 1.0, opacity);
    gl_FragColor = color;
}