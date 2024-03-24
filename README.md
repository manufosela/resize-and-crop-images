# Image Resizer and Cropper

Este script Node.js utiliza la biblioteca Sharp para redimensionar y recortar imágenes automáticamente.
Las imágenes se procesan a un tamaño específico, proporcionado a través de la línea de comando, y se guardan en una estructura de directorio replicada bajo un directorio especificado.

## Requisitos

- Node.js
- npm

## Instalación

Primero, clone o descargue este repositorio. Luego, instale las dependencias necesarias:

```bash
npm install
```

## Uso

Ejecute el script desde la línea de comando, especificando el tamaño deseado para las imágenes como anchoxalto. Por ejemplo:

```bash
  node index.js 480x480
```

Este comando procesará todas las imágenes en el directorio original, aplicará redimensionamiento y recorte según sea necesario, y guardará las imágenes resultantes en el directorio procesadas.

## Estructura de Directorio

Asegúrese de que su proyecto tenga al menos estos dos directorios:

original: Donde deben ubicarse sus imágenes originales.
procesadas: Donde se guardarán las imágenes procesadas, manteniendo la estructura de subdirectorios del directorio original.

## Contribuir

Si desea contribuir a este proyecto, sus pull requests son bienvenidos. Para cambios importantes, por favor abra un issue primero para discutir lo que le gustaría cambiar.

## Licencia

Apache License 2.0
