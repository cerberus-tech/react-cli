import dedent from 'dedent';
import { createComponentFile } from './createComponentFile';
import { pascalToDashCase } from './utils/pascalToDashCase';
import { styleSheetExtension } from './utils/stylesheetExtension';

export const createComponent = (componentName: string, relativePath: string): void => {
  let className = '`${stylus[';
  className += `'${pascalToDashCase(componentName)}'`;
  className += "]}${className ? ` ${className}` : ''}`";
  const componentAsString = dedent`
  import React from 'react';
  import stylus from './${componentName}${styleSheetExtension()}';

  export interface I${componentName}Props {
    className?: string;
  }

  export const ${componentName}: React.FC<I${componentName}Props> = ({ className }: I${componentName}Props) => {
    return (
      <div className={${className}}>
        <span>${componentName}</span>
      </div>
    )
  }
  `;
  createComponentFile(relativePath, componentName, componentAsString);
};
