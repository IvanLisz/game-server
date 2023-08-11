export interface IResource {
  value(): number;
  reduce(amount: number): IResource;
  refill(amount: number): IResource;
}

export class Resource implements IResource {
  protected readonly _value: number;
  protected readonly _maxValue: number;

  constructor(value: number, maxValue: number) {
    this._value = value;
    this._maxValue = maxValue;
  }

  value(): number {
    return this._value;
  }

  protected isDepleted(): boolean {
    return this._value <= 0;
  }

  reduce(amount: number): IResource {
    let newValue = this._value - amount;
    if (newValue < 0) newValue = 0;
    return new Resource(newValue, this._maxValue);
  }

  refill(amount: number): IResource {
    let newValue = this._value + amount;
    if (newValue > this._maxValue) newValue = this._maxValue;
    return new Resource(newValue, this._maxValue);
  }
}
