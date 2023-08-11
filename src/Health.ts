import { IResource, Resource } from "./Resource";

export interface IHealth extends IResource {
  isAlive(): boolean;
}

export class Health extends Resource implements IHealth {
  isAlive(): boolean {
    return !this.isDepleted();
  }
}
