import { Health, IHealth } from "../Health";
import { Potion } from "./Potion";

export class HealthPotion extends Potion<IHealth> {
  constructor(name: string, description: string, potency: number) {
    super(name, description, potency, Health);
  }

  use(target: IHealth): IHealth {
    console.log("Restored " + this.potency() + " of health");
    return super.use(target);
  }

  description(): string {
    return `A health potion that restores ${this._potency} health points.`;
  }

  value(): number {
    return this._potency * 10;
  }
}
