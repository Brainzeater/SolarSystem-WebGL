#version 300 es

in vec3 inPosition;
uniform mat4 matrix; 
uniform mat4 nMatrix;     //matrix to transform normals

in vec2 a_uv;
out vec2 uvFS;

void main() {
  uvFS = vec2(a_uv.x, 1.0-a_uv.y);
  gl_Position = matrix * vec4(inPosition, 1.0);
}
