import { ICharacter } from "../Character";
import { ISpell, Spell } from "./Spell";

interface IHealSpell extends ISpell {}

export class HealSpell extends Spell implements IHealSpell {
  protected readonly _heal: number;

  constructor(name: string, mana: number, damage: number) {
    super(name, mana);
    this._heal = damage;
  }
}
