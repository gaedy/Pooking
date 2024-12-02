const createImagesMap = () => {
  const imagesMap = {};
  const images = import.meta.glob("/src/assets/img/**/*.webp", { eager: true });

  Object.keys(images).forEach((filePath) => {
    const fileName = filePath.split("/").pop().replace(".webp", "");
    imagesMap[fileName] = images[filePath].default;
  });

  return imagesMap;
};

export const theImages = createImagesMap();
