export class FormatError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
    this.name = 'FormatError';
  }
}
