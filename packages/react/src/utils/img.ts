enum ImageType {
  URL = "url",
  BASE64 = "base64",
  FILE = "file",
}

/**
 * Checks weather the image source is valid or not.
 * Possible sources are:
 * - URL
 * - Base64
 * - File
 * @param image
 */
export const checkImageSource = (image: string | Blob): ImageType => {
  if (typeof image !== "string") {
    return ImageType.FILE;
  }

  if (image.startsWith("http") || image.startsWith("/")) {
    return ImageType.URL;
  } else if (image.startsWith("data:image")) {
    return ImageType.BASE64;
  }

  // this means provided image is not valid
  throw new Error("Invalid image source.");
};

export const parseImage = (image: Blob | string): string => {
  try {
    switch (checkImageSource(image)) {
      case ImageType.URL:
      case ImageType.BASE64:
        return image as string;
      case ImageType.FILE:
        return URL.createObjectURL(image as Blob);
    }
  } catch (error) {
    throw new Error("Failed to parse image.");
  }
};
