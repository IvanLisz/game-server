import { IResource } from "./Resource";

export interface IResources {
  list(): IResource[];
}

export class Resources implements IResources {
  private resources: IResource[];

  constructor(resources: IResource[]) {
    this.resources = resources;
  }

  list(): IResource[] {
    return this.resources;
  }
}
