import ColorThief from 'colorthief';

export const GetColorsImage = async (imageSrc) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageSrc;
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      try {
        const colorThief = new ColorThief();
        const palette = colorThief.getPalette(img, 5);
        const hexPalette = palette.map((rgb) => rgbToHex(rgb));
        resolve(hexPalette);
      } catch (error) {
        reject(error);
      }
    };
    img.onerror = () => {
      reject(new Error('Error loading image'));
    };
  });
};

const rgbToHex = (rgb) => {
  return '#' + rgb.map((value) => value.toString(16).padStart(2, '0')).join('');
};
