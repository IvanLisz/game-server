import { Character } from "./src/Character";
import { Damage } from "./src/Damage";
import { Health } from "./src/Health";
import { Mana } from "./src/Mana";
import { Spell } from "./src/Spell/Spell";

const character1 = new Character(
  new Health(50, 100),
  new Mana(25, 100),
  new Spell(new Damage(100))
);

const character2 = new Character(
  new Health(50, 100),
  new Mana(25, 100),
  new Spell(new Damage(100))
);

character1.attack(character2);
character.takeSpell(spell);