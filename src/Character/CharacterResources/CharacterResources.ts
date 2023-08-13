import { Health } from "../../Resource/Health";
import { Mana } from "../../Resource/Mana";
import { IResources } from "../../Resource/Resources";
import { ICharacterHealth } from "./CharacterHealth";
import { ICharacterMana } from "./CharacterMana";

export interface ICharacterResources {
  apply(resources: IResources): void;
}

export class CharacterResources implements ICharacterResources {
  protected _health: ICharacterHealth;
  protected _mana: ICharacterMana;

  constructor(health: ICharacterHealth, mana: ICharacterMana) {
    this._health = health;
    this._mana = mana;
  }

  apply(resources: IResources) {
    resources.list().forEach((resource) => {
      switch (true) {
        case resource instanceof Health:
          this._health = this._health.apply(resource);
          return;

        case resource instanceof Mana:
          this._mana = this._mana.apply(resource);
          return;
      }
    });
  }
}
