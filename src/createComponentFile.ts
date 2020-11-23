import { createFile } from './createFile';

export const createComponentFile = (relativePath: string, componentName: string, componentAsString: string): void => {
  try {
    const extension = 'tsx'; // TODO: extension make extension configurable
    const componentAbsPath = createFile(relativePath, componentName, extension, componentAsString);
    console.log(`Component created at: ${componentAbsPath}`);
  } catch (e) {
    console.error(`Failed to create component: ${e.message}`);
  }
};
