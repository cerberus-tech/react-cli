import dedent from 'dedent';
import { createComponentFile } from './createComponentFile';
import { className } from './utils/className';
import { styleSheetImport } from './utils/styleSheetImport';

export const createComponent = (componentName: string, relativePath: string): void => {
  const customClass = "${className ? className : ''}";
  const customClassString = '`' + customClass + '`';
  const componentAsString = dedent`
  import React from 'react';
  import classnames from 'classnames';
  ${styleSheetImport(componentName)};

  export interface I${componentName}Props {
    className?: string;
  }

  export const ${componentName}: React.FC<I${componentName}Props> = ({ className }: I${componentName}Props) => {
    return (
      <div className={classnames(${className(componentName)}, ${customClassString})}>
        <span>${componentName}</span>
      </div>
    )
  }
  `;
  createComponentFile(relativePath, componentName, componentAsString);
};
