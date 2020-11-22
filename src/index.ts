#!/usr/bin/env node
import * as yargs from 'yargs';
import { createComponent } from './createComponent';
import { createComponentStyleSheet } from './createComponentStylesheet';

const { argv } = yargs
  .scriptName('react-cli')
  .showHelpOnFail(true)
  .command('g', 'component', (yargs) => {
    yargs.positional('componentName', {
      type: 'string',
      describe: 'The name of the generated component',
    });
    yargs.positional('relPath', {
      describe: 'relative path to directory where the component will be generated to',
    });
  })
  .demandCommand();

const [command, subject, subjectInstanceName, relativePath] = argv._;

if (command.toLocaleLowerCase() === 'g') {
  if (subject.toLocaleLowerCase() === 'component') {
    createComponent(subjectInstanceName, relativePath);
    createComponentStyleSheet(relativePath, subjectInstanceName); // TODO make parameter order consistent with createComponent
  }
}
