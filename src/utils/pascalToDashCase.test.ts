import { isPascalCase, pascalToDashCase } from './pascalToDashCase';

describe('camelCase to dash-case tests', () => {
  it('Should be false if input is not in PascalCase format', () => {
    const input = 'myComponent';
    expect(isPascalCase(input)).toBeFalsy();
  });
  it('Should be false if input has any special characters', () => {
    const input = 'My_Component';
    expect(isPascalCase(input)).toBeFalsy();
  });
  it('Should be true if input is in camelCase format', () => {
    const input = 'MyComponent';
    expect(isPascalCase(input)).toBeTruthy();
  });
  it('Should throw error if input is not in camelCase format', () => {
    const input = 'myComponent';
    expect(() => pascalToDashCase(input)).toThrowError();
  });
  it('Should return dash-case of camelCase input', () => {
    const input = 'MyComponent';
    const expected = 'my-component';
    expect(pascalToDashCase(input)).toBe(expected);
  });
});
