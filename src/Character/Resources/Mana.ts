import { IResource, Resource } from "./Resource";

export interface IMana extends IResource {
  hasPower(amount: number): boolean;
}

export class Mana extends Resource implements IMana {
  hasPower(amount: number): boolean {
    return this.value() >= amount;
  }
}
