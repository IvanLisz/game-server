import { Character } from "./src/Character/Character";
import { CharacterHealth } from "./src/Character/CharacterResources/CharacterHealth";
import { CharacterMana } from "./src/Character/CharacterResources/CharacterMana";
import { CharacterResources } from "./src/Character/CharacterResources/CharacterResources";
import { Health } from "./src/Resource/Health";
import { Mana } from "./src/Resource/Mana";
import { Resources } from "./src/Resource/Resources";
import { Spell } from "./src/Spell/Spell";

const char1 = new Character(
  new CharacterResources(
    new CharacterHealth(new Health(50), new Health(100)),
    new CharacterMana(new Mana(100), new Mana(100))
  ),
  new Spell(
    "Healing spell",
    new Resources([new Mana(-50)]),
    new Resources([new Health(20)])
  )
);

const char2 = new Character(
  new CharacterResources(
    new CharacterHealth(new Health(50), new Health(100)),
    new CharacterMana(new Mana(100), new Mana(100))
  ),
  new Spell(
    "Dmg spell",
    new Resources([new Mana(-50)]),
    new Resources([new Health(-50)])
  )
);

console.log("char1 resources", {
  health: char1.resources()._health.value(),
  mana: char1.resources()._mana.value(),
});

/* char1 Heals */
char1.attack(char1);
console.log("char1 resources", {
  health: char1.resources()._health.value(),
  mana: char1.resources()._mana.value(),
});

/* char2 Dmg */
console.log("char2 resources", {
  health: char2.resources()._health.value(),
  mana: char2.resources()._mana.value(),
});
char2.attack(char1);
console.log("char2 resources", {
  health: char2.resources()._health.value(),
  mana: char2.resources()._mana.value(),
});
console.log("char1 resources", {
  health: char1.resources()._health.value(),
  mana: char1.resources()._mana.value(),
});
