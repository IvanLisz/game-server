import { ICharacter } from "../Character";

export interface ISpell {
  castOn(character: ICharacter): void;
}

export abstract class Spell implements ISpell {
  private readonly _name: string;
  private readonly _mana: number;

  constructor(name: string, mana: number) {
    this._name = name;
    this._mana = mana;
  }

  abstract castOn(character: ICharacter): void;
}
