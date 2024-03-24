const { resizeAndCropImage } = require('../resizeAndCropImage.js');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

jest.mock('sharp');

describe('resizeAndCropImage', () => {
  it('should call sharp with the correct arguments', async () => {
    const mockSharpInstance = {
      resize: jest.fn().mockReturnThis(),
      toFile: jest.fn().mockResolvedValue({})
    };
    sharp.mockReturnValue(mockSharpInstance);

    await resizeAndCropImage('input.jpg', 'output.jpg', 480, 480);

    expect(sharp).toHaveBeenCalledWith('input.jpg');
    expect(mockSharpInstance.resize).toHaveBeenCalledWith({
      width: 480,
      height: 480,
      fit: 'cover',
      position: 16
    });
    expect(mockSharpInstance.toFile).toHaveBeenCalledWith('output.jpg');
  });
});
