import { IHealth, Health } from "../../Resource/Health";
import { CharacterResource, ICharacterResource } from "./CharacterResource";

export interface ICharacterHealth extends ICharacterResource<IHealth> {}

export class CharacterHealth
  extends CharacterResource<IHealth>
  implements ICharacterHealth
{
  constructor(current: IHealth, max: IHealth) {
    super(current, max, Health);
  }
}
