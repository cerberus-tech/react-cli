import dedent from 'dedent';
import { createComponentFile } from './createComponentFile';

export const createComponent = (componentName: string, relativePath: string) => {
  const componentAsString = dedent`
  import React from 'react';
  import './${componentName}.scss';

  export interface I${componentName}Props {}

  export const ${componentName}: React.FC<I${componentName}Props> = (props: I${componentName}Props) => {
    return (
      <div>
        <span>${componentName}</span>
      <div>
    )
  }
  `;
  createComponentFile(relativePath, componentName, componentAsString);
}