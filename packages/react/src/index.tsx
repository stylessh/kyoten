import React from "react";

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

  return <div>{image}</div>;
};

export default Kyoten;
