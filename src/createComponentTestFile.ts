import dedent from 'dedent';
import { createFile } from './createFile';

export const createComponentTestFile = (dirPath: string, fileName: string, extension: string): void => {
  const testFileAsString = dedent`
  import React from 'react';
  import { render } from '@testing-library/react';
  import { ${fileName} } from './${fileName}';

  describe('${fileName}', () => {
    it('Should be defined', () => {
      const { container } = render(<${fileName} />);
      expect(container).toBeTruthy();
    });
  });
  
  `;
  try {
    const fileAbsPath = createFile(dirPath, fileName, extension, testFileAsString);
    console.log(`Test file has been created at: ${fileAbsPath}`);
  } catch (e) {
    console.error(e.message);
  }
};
