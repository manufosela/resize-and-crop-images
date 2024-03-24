const sharp = require('sharp');


/**
 * Redimensiona y recorta una imagen.
 * 
 * @async
 * @function resizeAndCropImage
 * @param {string} inputPath - Ruta de la imagen original.
 * @param {string} outputPath - Ruta de salida para la imagen procesada.
 * @param {number} width - Ancho deseado.
 * @param {number} height - Alto deseado.
 */
const resizeAndCropImage = async (inputPath, outputPath, width, height) => {
  return sharp(inputPath)
    .resize({
      width: width,
      height: height,
      fit: sharp.fit.cover,
      position: sharp.strategy.entropy
    })
    .toFile(outputPath);
};

module.exports = { resizeAndCropImage };