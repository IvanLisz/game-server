export interface IItem {
  name(): string;
  description(): string;
}

export abstract class Item implements IItem {
  protected readonly _name: string;
  protected readonly _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  name(): string {
    return this._name;
  }

  description(): string {
    return this._description;
  }
}
