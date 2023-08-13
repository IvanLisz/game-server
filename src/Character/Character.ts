import { ISpell } from "../Spell/Spell";
import { IResources } from "./CharacterResources/CharacterResources";

export interface ICharacter {
  attack(target: ICharacter): void;
  resources(): IResources;
}

export class Character implements ICharacter {
  protected _resources: IResources;
  protected _spell: ISpell;

  constructor(resources: IResources, spells: ISpell) {
    this._resources = resources;
    this._spell = spells;
  }

  attack(target: ICharacter) {
    this._spell.cast(this, target);
  }

  resources(): IResources {
    return this._resources;
  }
}
