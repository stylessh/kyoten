import { useTexture } from "@react-three/drei";
import { parseImage } from "./utils/img";

export function useImage(input: string | Blob) {
  const image = parseImage(input);

  return useTexture(image);
}
