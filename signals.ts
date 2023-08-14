import { createEffect, createSignal } from "solid-js/dist/solid.js";

import { createStore } from "solid-js/store/dist/store.js";
const [character, setCharacter] = createStore({
  char1: 1,
  char2: 2,
});

createEffect(() => {
  console.log("char1 updates", character.char1);
});

setInterval(() => {
  setCharacter("char1", Date.now());
}, 1000);
