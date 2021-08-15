import dedent from 'dedent';
import { createFile } from './createFile';

export const createComponentStoryFile = (dirPath: string, fileName: string): void => {
  try {
    const extension = 'stories.tsx'; // TODO: extension make extension configurable
    const storyAsString = dedent`
    import React from 'react';
    import { ComponentStory, ComponentMeta } from '@storybook/react';
    import { ${fileName}, I${fileName}Props } from './${fileName}';

    export default {
      title: '${fileName}',
      component: ${fileName},
    } as ComponentMeta<typeof ${fileName}>;

    const Template: ComponentStory<typeof ${fileName}> = (args) => {
      return (
        <${fileName} {...args} />
      );      
    }

    export const Default = Template.bind({});
    Default.args = {
      className: ''
    };
    `;
    const componentAbsPath = createFile(dirPath, fileName, extension, storyAsString);
    console.log(`Story created at: ${componentAbsPath}`);
  } catch (e) {
    console.error(`Failed to create story: ${e.message}`);
  }
};
