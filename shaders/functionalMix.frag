#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution, u_mouse;
uniform float u_time;

vec3 red = vec3(1.0, 0.0, 0.0);
vec3 blue = vec3(0.0, 0.0, 1.0);

void main() {
    vec2 fragPos = gl_FragCoord.xy / u_resolution;
    vec2 mousePos = u_mouse.xy / u_resolution;

    float mixPct1 = sin(u_time) + cos(u_time);
    vec3 newColor1 = mix(red, blue, mixPct1);

    float mixPct2 = mod(u_time, 2.0) * 0.5;
    vec3 newColor2 = mix(red, blue, mixPct2);

    //checkerboard
    if((fragPos.x < 0.5 && fragPos.y > 0.5) || (fragPos.x > 0.5 && fragPos.y < 0.5))
        gl_FragColor = vec4(newColor1, 1.0);
    else
        gl_FragColor = vec4(newColor2, 1.0);
}