import { IResource, Resource } from "./Resource";

export interface IHealth extends IResource {}

export class Health extends Resource implements IHealth {
  constructor(value: number) {
    super(value);
  }
}
