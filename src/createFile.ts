import * as fs from 'fs';
import { FileSystemError } from './exceptions/FileSystemError';
import { getFileAbsolutePath } from './utils/getPath';

export const createFile = (dirPath: string, fileName: string, extension: string, data: string): string => {
  const fileAbsPath = getFileAbsolutePath(dirPath, fileName, extension);

  if (fs.existsSync(fileAbsPath)) {
    throw new FileSystemError('File already exists!');
  }
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  try {
    fs.writeFileSync(fileAbsPath, data);
  } catch (e) {
    throw new FileSystemError(`Couldn't create file: ${fileName}`);
  }

  return fileAbsPath;
};
