import React from "react";
import { useImage } from "./useImage";
import { shaderMaterial } from "@react-three/drei";
import { Object3DNode, extend } from "@react-three/fiber";

interface ParticlesProps {
  image: string;
}

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  varying vec2 vUv;

  void main() {
    vec3 color = texture2D(uTexture, vUv).rgb;
    gl_FragColor = vec4(color, 1.0);
  }
`;

export const ParticlesShaderMaterial = shaderMaterial(
  {
    uTexture: null,
  },
  vertexShader,
  fragmentShader
);

extend({ ParticlesShaderMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    particlesShaderMaterial: Object3DNode<any, typeof ParticlesShaderMaterial>;
  }
}

function Particles({ image }: ParticlesProps) {
  const texture = useImage(image);

  return (
    <>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      <mesh scale={[5, 5, 5]}>
        <planeGeometry />

        <particlesShaderMaterial attach="material" uTexture={texture} />
      </mesh>
    </>
  );
}

export default Particles;
