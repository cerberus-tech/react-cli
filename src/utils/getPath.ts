import * as path from 'path';

export const directoryAbsolutePath = (relativePath: string): string => path.resolve(`./${relativePath}`);
export const getFileNameWithExtension = (fileName: string, extension: string): string => `${fileName}.${extension}`;
export const getFileAbsolutePath = (dirPath: string, fileName: string, extension: string): string =>
  path.resolve(dirPath, getFileNameWithExtension(fileName, extension));
