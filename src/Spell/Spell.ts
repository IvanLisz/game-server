import { ICharacter } from "../Character/Character";
import { IResources } from "../Character/Resources/Resources";

export interface ISpell {
  cast(caster: ICharacter, target: ICharacter): void;
}

export class Spell implements ISpell {
  private readonly _name: string;
  private readonly _castingResources: IResources;
  private readonly _targetResources: IResources;

  constructor(
    name: string,
    castingResources: IResources,
    targetResources: IResources
  ) {
    this._name = name;
    this._castingResources = castingResources;
    this._targetResources = targetResources;
  }

  cast(caster: ICharacter, target: ICharacter): void {
    caster.resources().take(this._castingResources);
    target.resources().take(this._targetResources);
  }
}
