/**
 * Script para redimensionar y recortar imágenes en Node.js utilizando Sharp.
 * 
 * Este script procesa todas las imágenes encontradas en el directorio 'original' y sus subdirectorios,
 * redimensionándolas a un tamaño especificado por línea de comandos (ejemplo: 480x480) y aplicando un
 * recorte centrado si es necesario para mantener la proporción. Las imágenes procesadas se guardan en
 * el directorio 'procesadas', replicando la estructura de subdirectorios del directorio original.
 * 
 * 
 * 
 * 
 * 
 * 
 * @module resizeAndCropImages
 */
const fs = require('fs');
const path = require('path');
const { resizeAndCropImage } = require('./resizeAndCropImage');
const [width, height] = process.argv[2].split('x').map(Number);
const originalDir = 'original';
const processedDir = 'procesadas';
let imagesProcessed = 0;

/**
 * Procesa recursivamente un directorio de imágenes.
 * 
 * @async
 * @function processDirectory
 * @param {string} dir - Directorio actual para procesar.
 * @param {string} [baseDir=''] - Ruta base relativa para la creación de estructuras de directorio en 'procesadas'.
 */
const processDirectory = async (dir, baseDir = '') => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(baseDir, entry.name);

    if (entry.isDirectory()) {
      const processedDirPath = path.join(processedDir, relPath);
      if (!fs.existsSync(processedDirPath)) {
        fs.mkdirSync(processedDirPath, { recursive: true });
      }

      await processDirectory(fullPath, relPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      const outputPath = path.join(processedDir, relPath);
      await resizeAndCropImage(fullPath, outputPath, width, height);
      imagesProcessed++;
    }
  }
};

if (width && height) {
  processDirectory(originalDir)
    .then(() => console.log(`Proceso completado. Número de imágenes procesadas a ${process.argv[2]}: ${imagesProcessed}.`))
    .catch(err => console.error('Error procesando imágenes:', err));
} else {
  console.error('Por favor, especifica el tamaño como WxH. Ejemplo: 480x480');
}
