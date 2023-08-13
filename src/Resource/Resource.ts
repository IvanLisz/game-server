export interface IResource {
  value(): number;
}

export abstract class Resource implements IResource {
  protected readonly _value: number;

  constructor(value: number) {
    this._value = value;
  }

  value(): number {
    return this._value;
  }
}
