import * as yargs from 'yargs';
import { createComponent } from './createComponent';

const [command, subject, subjectInstanceName, relativePath] = yargs.argv._;

if (command.toLocaleLowerCase() === 'g') {
  if (subject.toLocaleLowerCase() === 'component') {
    createComponent(subjectInstanceName, relativePath);
  }
}
