import dedent from 'dedent';
import * as fs from 'fs';
import { join } from 'path';
import { logger } from './logger';
import { pascalToDashCase } from './utils/pascalToDashCase';

export const createComponentStyleSheet = (relPath: string, componentName: string): void => {
  const styleSheetAsString = dedent`
    .${pascalToDashCase(componentName)} {}
  `;
  try {
    const extension = 'scss'; // TODO: make this configurable
    const fileName = `.${componentName}.${extension}`;
    fs.writeFileSync(join(__dirname, relPath, fileName), styleSheetAsString);
  } catch (e) {
    logger.error(e.message);
  }
};
