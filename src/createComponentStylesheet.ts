import dedent from 'dedent';
import * as fs from 'fs';
import { join } from 'path';
import { directoryAbsolutePath } from './utils/getPath';
import { pascalToDashCase } from './utils/pascalToDashCase';

export const createComponentStyleSheet = (componentName: string, relPath: string): void => {
  const extension = 'module.scss'; // TODO: make this configurable
  const fileName = `${componentName}.${extension}`;
  const dirPath = directoryAbsolutePath(relPath);
  const filePath = join(dirPath, fileName);
  const styleSheetAsString = dedent`.${pascalToDashCase(componentName)} {}`;
  try {
    fs.writeFileSync(filePath, styleSheetAsString);
    console.log(`Component stylesheet created at: ${filePath}`);
  } catch (e) {
    console.error(e.message);
  }
};
