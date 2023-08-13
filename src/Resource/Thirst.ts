import { IResource, Resource } from "./Resource";

interface IThirst extends IResource {}

export class Thirst extends Resource implements IThirst {
  type = "THIRST";

  constructor(value: number) {
    super(value);
  }
}
