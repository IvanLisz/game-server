import { ICharacter } from "../Character";
import { ISpell, Spell } from "./Spell";

export interface IDamageSpell extends ISpell {}

export class DamageSpell extends Spell implements IDamageSpell {
  protected readonly _damage: number;

  constructor(name: string, mana: number, damage: number) {
    super(name, mana);
    this._damage = damage;
  }

  castOn(character: ICharacter): void {
    character.health = character.health.reduce(this._damage);
  }
}
