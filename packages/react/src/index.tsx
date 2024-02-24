import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Particles from "./particles";

interface KyotenProps {
  image: string;
}

/**
 * Kyoten - Generate a particle canvas based off of a given image.
 * @param {string} image - The image to generate the particle canvas from.
 * @returns {JSX.Element}
 */
const Kyoten = ({ image }: KyotenProps): JSX.Element => {
  if (!image) throw new Error("No image provided.");

  return (
    <Canvas id="kyoten-webgl" style={{ height: "100vh", width: "100vw" }}>
      <Particles image={image} />
      <OrbitControls />
    </Canvas>
  );
};

export default Kyoten;
