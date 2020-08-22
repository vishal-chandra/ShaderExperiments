/*
#3
creating colors using swizzle
*/

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution, u_mouse;
uniform float u_time;

vec3 makePurple(float brightness) {
    return vec3(brightness, 0.0, brightness);
}

void main() {
    vec2 fragPos = gl_FragCoord.xy / u_resolution;
    vec2 mousePos = u_mouse.xy / u_resolution;

    vec3 left = makePurple(mousePos.y);
    vec3 right = left.grb;

    if(fragPos.x <= 0.45)
        gl_FragColor = vec4(left, 1.0);
    else if(fragPos.x > 0.45 && fragPos.x < 0.55)
        if(fragPos.y <= mousePos.y) 
            gl_FragColor = vec4(vec3(0.7), 1.0);
        else
            gl_FragColor = vec4(vec3(1.0), 1.0);
    else if(fragPos.x >= 0.55)
        gl_FragColor = vec4(right, 1.0);
        
}
