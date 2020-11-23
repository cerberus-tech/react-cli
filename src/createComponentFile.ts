import { createFile } from './createFile';
import { logger } from './logger';

export const createComponentFile = (relativePath: string, componentName: string, componentAsString: string): void => {
  try {
    const extension = 'tsx'; // TODO: extension make extension configurable
    const componentAbsPath = createFile(relativePath, componentName, extension, componentAsString);
    logger.info(`Component created at: ${componentAbsPath}`);
  } catch (e) {
    logger.error(`Failed to create component: ${e.message}`);
  }
};
