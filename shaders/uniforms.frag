/*
#1
First Shader: using uniforms for animation
*/

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 pos = gl_FragCoord.xy/u_resolution; //normalize

	vec2 mouse = u_mouse/u_resolution;
	float mouseDist = length(mouse);

	gl_FragColor = vec4(pos.x, pos.y, mouseDist, sin(0.1 * u_time));
}