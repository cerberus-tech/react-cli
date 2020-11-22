import { FormatError } from '../exceptions/FormatError';

export const isPascalCase = (s: string): boolean => {
  return !!s.match(/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/);
};

export const pascalToDashCase = (s: string): string => {
  if (isPascalCase(s)) {
    return s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()).slice(1);
  } else {
    throw new FormatError('Input string should be in camelCase format!');
  }
};
