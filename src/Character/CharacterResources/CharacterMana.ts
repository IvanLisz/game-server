import { IMana, Mana } from "../../Resource/Mana";
import { CharacterResource, ICharacterResource } from "./CharacterResource";

export interface ICharacterMana extends ICharacterResource<IMana> {}

export class CharacterMana
  extends CharacterResource<IMana>
  implements ICharacterMana
{
  constructor(current: IMana, max: IMana) {
    super(current, max, Mana);
  }
}
