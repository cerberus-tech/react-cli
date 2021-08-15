import { getFileAbsolutePath, getFileNameWithExtension } from './getPath';
import { join } from 'path';

describe('Testing path utilities', () => {
  const dirPath = Object.freeze('C://projects/example');
  it('Should return the expected path', () => {
    const fileName = 'MyComponent';
    const ext = 'tsx';
    const expectedPath = join(dirPath, `${fileName}.${ext}`);
    expect(getFileAbsolutePath(dirPath, fileName, ext)).toBe(expectedPath);
  });
  it('Should return the filename with extension', () => {
    const fileName = 'MyComponent';
    const ext = 'tsx';
    const expected = 'MyComponent.tsx';
    expect(getFileNameWithExtension(fileName, ext)).toBe(expected);
  });
});
