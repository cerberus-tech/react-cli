import config from 'config';
import { IStylesConfig } from '../config';

export const stylesConfig = config.get<IStylesConfig>('styles');
export const styleSheetExtension = (config = stylesConfig): string =>
  `${config?.modules === true ? 'module' : ''}.${stylesConfig?.sass ? 'scss' : 'css'}`;
