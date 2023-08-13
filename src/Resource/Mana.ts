import { IResource, Resource } from "./Resource";

export interface IMana extends IResource {}

export class Mana extends Resource implements IMana {
  constructor(value: number) {
    super(value);
  }
}
