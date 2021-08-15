import config from 'config';
import { IStylesConfig } from '../config';
import { pascalToDashCase } from './pascalToDashCase';

export const stylesConfig = config.get<IStylesConfig>('styles');
export const className = (componentName: string, config = stylesConfig): string =>
  `${
    config?.modules === true
      ? ` stylus[' + ${pascalToDashCase(componentName)} + ']`
      : `'${pascalToDashCase(componentName)}'`
  }`;
