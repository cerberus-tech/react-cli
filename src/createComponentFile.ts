import * as fs from 'fs';
import { FileSystemError } from './exceptions/FileSystemError';
import { logger } from './logger';
import { directoryAbsolutePath } from './utils/getPath';

export const createComponentFile = (relativePath: string, componentName: string, componentAsString: string): void => {
  try {
    const dirPath = directoryAbsolutePath(relativePath);
    const extension = 'tsx'; // TODO: extension make extension configurable
    const fileName = `${componentName}.${extension}`;
    const filePath = `${dirPath}/${fileName}`;

    if (fs.existsSync(filePath)) {
      throw new FileSystemError('Component already exists!');
    }

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, componentAsString);
  } catch (e) {
    logger.error(e.message);
  }
};
