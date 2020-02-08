#version 300 es

precision mediump float;

in vec3 fsNormal;
in vec3 fsPosition; 
in vec2 uvFS;
out vec4 outColor;
uniform sampler2D u_texture;


uniform vec3 mDiffColor; //material diffuse color 
uniform vec3 mSpecColor; //material specular color
uniform float mSpecPower; //power of specular ref

uniform vec3 lightDirection; // directional light direction vec
uniform vec3 lightColor; //directional light color 

uniform vec3 eyePosition; //Observer's position


void main() {
	float target = 61.0;
	vec3 lightPosition = vec3(0,0,0);
	float basePoint = target/length(lightPosition - fsPosition);
	float decay = 0.3;

	float pointLightWithDecay = pow(basePoint, decay);
	vec3 norm = normalize(lightPosition - fsPosition);

  vec3 nEyeDirection = normalize(eyePosition - fsPosition);
  // vec3 nLightDirection = - normalize(lightDirection);
  vec3 nNormal = normalize(fsNormal);
  
  // vec3 diffuse = mDiffColor * lightColor * clamp(dot(nLightDirection,nNormal), 0.0, 1.0);
  vec3 diffuse = mDiffColor * lightColor * clamp(dot(norm,nNormal), 0.0, 1.0);
  
  // vec3 r = 2.0f * dot(nLightDirection,nNormal) * nNormal - nLightDirection;
  vec3 r = 2.0f * dot(norm,nNormal) * nNormal - norm;
  
  vec3 phongSpecular = mSpecColor * lightColor * pow(clamp(dot(nNormal,r), 0.0, 1.0), mSpecPower);
  
  vec4 textureCol = texture(u_texture, uvFS* vec2(1, -1)); 
  outColor = vec4(min(textureCol.xyz + pointLightWithDecay * (diffuse + phongSpecular), vec3(1.0, 1.0, 1.0)),1.0);
}