export type ErrorDataType = string | number | Record<string, unknown> | [] | void | boolean | Error;

export abstract class CustomError extends Error {
  public name = '';
  protected data: ErrorDataType = {};

  constructor() {
    super();
    Error.captureStackTrace(this, this.constructor);
  }

  initialize(data: ErrorDataType): void {
    this.data = data;
  }

  abstract toString(): string;
}
