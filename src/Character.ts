import { IHealth } from "./Health";
import { IMana } from "./Mana";
import { IDamageSpell } from "./Spell/DamageSpell";
import { ISpell } from "./Spell/Spell";

export interface ICharacter {
  takeSpell(spell: ISpell): void;
}

export class Character implements ICharacter {
  protected health: IHealth;
  protected mana: IMana;

  constructor(health: IHealth, mana: IMana) {
    this.health = health;
    this.mana = mana;
  }

  attack(character: ICharacter) {
    character.takeSpell(this._spell);
  }

  takeSpell(spell: ISpell) {
    spell.castOn(this);
  }

  takeDamage(spell: IDamageSpell) {
    this.health = this.health.reduce(spell.value());
  }

  takeDamage(spell: IDamageSpell) {
    this.mana = this.health.reduce(spell.value());
  }

  takeDamage(spell: IHealSpell) {
    this.health = this.health.refill(spell.value());
  }
}
