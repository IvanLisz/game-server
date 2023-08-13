import { IResource } from "../Resource/Resource";
import { IItem, Item } from "./Item";

type ClassConstructor<T> = new (...args: any[]) => T;

interface IPotion extends IItem {
  potency(): number;
  use(resource: IResource): IResource;
}

export abstract class Potion<T extends IResource>
  extends Item
  implements IPotion
{
  protected readonly _potency: number;
  protected readonly _resourceType: ClassConstructor<T>;

  constructor(
    name: string,
    description: string,
    potency: number,
    resourceType: ClassConstructor<T>
  ) {
    super(name, description);
    this._potency = potency;
    this._resourceType = resourceType;
  }

  use(target: T): T {
    if (target instanceof this._resourceType) {
      return target.refill(this._potency) as T;
    }
    throw new Error("This potion is not applicable to the given target.");
  }

  potency(): number {
    return this._potency;
  }
}
