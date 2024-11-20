
const createImagesMap = () => {
    const imagesMap = {};
    const images = import.meta.glob('/src/assets/img/**/*.jpg', { eager: true });

    Object.keys(images).forEach((filePath) => {
        const fileName = filePath.split('/').pop().replace('.jpg', '');
        imagesMap[fileName] = images[filePath].default;
    });

    return imagesMap;
}

export const theImages = createImagesMap();