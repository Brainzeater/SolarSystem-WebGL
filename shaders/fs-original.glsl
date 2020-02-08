#version 300 es

precision mediump float;

in vec2 uvFS;
out vec4 outColor;
uniform sampler2D u_texture;


void main() {
	vec4 texcol = texture(u_texture, uvFS);

	outColor = vec4(texcol.rgb, texcol.a);
}
