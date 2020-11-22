export class FileSystemError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
    this.name = 'FileSystemError';
  }
}
