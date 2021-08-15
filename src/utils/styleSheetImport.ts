import config from 'config';
import { IStylesConfig } from '../config';
import { styleSheetExtension } from './stylesheetExtension';

export const stylesConfig = config.get<IStylesConfig>('styles');
export const styleSheetImport = (
  componentName: string,
  config = stylesConfig,
  getStyleSheetExtension = styleSheetExtension,
): string => `import ${config?.modules === true ? 'stylus from ' : ''}'./${componentName}.${getStyleSheetExtension()}'`;
