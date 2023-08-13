import { IResource } from "../../Resource/Resource";

export interface ICharacterResource<R extends IResource> {
  value(): number;
  // add(amount: number): ICharacterResource;
  // substract(amount: number): ICharacterResource;
  apply: (modification: R) => ICharacterResource<R>;
}

export class CharacterResource<R extends IResource>
  implements ICharacterResource<R>
{
  protected _value: R;
  protected readonly _max: R;
  protected readonly _resourceCtor: new (value: number) => R;

  constructor(value: R, maxValue: R, resourceCtor: new (value: number) => R) {
    this._value = value;
    this._max = maxValue;
    this._resourceCtor = resourceCtor;
  }

  value(): number {
    return this._value.value();
  }

  protected isDepleted(): boolean {
    return this._value.value() <= 0;
  }

  apply(modification: R): CharacterResource<R> {
    let newValue = this._value.value() + modification.value();
    if (newValue > this._max.value()) newValue = this._max.value();
    if (newValue < 0) newValue = 0;

    return new (this.constructor as typeof CharacterResource)(
      new this._resourceCtor(newValue),
      this._max,
      this._resourceCtor
    );
  }
}
