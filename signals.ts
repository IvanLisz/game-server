import { createEffect, createSignal, on } from "solid-js/dist/solid.js";

const activeCharacters = [];

const newCharacter = (name: string, connectionId: number) => {
  const char = {
    name: createSignal(name),
    hp: createSignal(100),
  };

  activeCharacters.push(char);

  createEffect(
    on(char.name[0], () => {
      console.log({
        connectionId,
        packet: "NAME_UPDATE",
        value: char.name[0](),
      });
    })
  );

  createEffect(
    on(char.hp[0], () => {
      console.log({
        connectionId,
        packet: "HP_UPDATE",
        value: char.hp[0](),
      });
    })
  );
};

const attack = (target) => {
  target.hp[1](target.hp[0]() - 10);
};

newCharacter("Zeus", 1);
newCharacter("Hades", 2);

setInterval(() => {
  if (activeCharacters[1].hp[0]() > 0) {
    attack(activeCharacters[1]);
  }
}, 1000);

setInterval(() => {
  activeCharacters[0].name[1]((name) => name + "!");
}, 3000);
