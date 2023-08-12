import { IHealth } from "./Health";
import { IMana } from "./Mana";

export interface IResources {
  take(resources: IResources): void;
  list(): IResources;
}

// TODO CharResources vs Resources
export class Resources implements IResources {
  protected _health: IHealth;
  protected _mana: IMana;

  constructor(health: IHealth, mana: IMana) {
    this._health = health;
    this._mana = mana;
  }

  apply(resouces: IResources) {}
}
