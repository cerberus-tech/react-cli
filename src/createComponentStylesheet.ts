import dedent from 'dedent';
import * as fs from 'fs';
import { join } from 'path';
import { logger } from './logger';
import { directoryAbsolutePath } from './utils/getPath';
import { pascalToDashCase } from './utils/pascalToDashCase';

export const createComponentStyleSheet = (componentName: string, relPath: string): void => {
  const extension = 'scss'; // TODO: make this configurable
  const fileName = `${componentName}.${extension}`;
  const dirPath = directoryAbsolutePath(relPath);
  const filePath = join(dirPath, fileName);
  const styleSheetAsString = dedent`.${pascalToDashCase(componentName)} {}`;
  try {
    fs.writeFileSync(filePath, styleSheetAsString);
    logger.info(`Component created at: ${filePath}`);
  } catch (e) {
    logger.error(e.message);
  }
};
