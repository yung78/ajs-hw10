import GameSavingLoader from './GameSavingLoader.js';
import read from './reader.js';
import json from './parser.js';

(async () => {
  try {
    const result = await read();
    const gameSaving = JSON.parse(await json(result));
    console.log(gameSaving);
    return gameSaving;
  } catch (err) {
    return err;
  }
})();

GameSavingLoader.load().then((saving) => {
  console.log(JSON.parse(saving));
  return JSON.parse(saving);
}, (err) => {
  console.log(err);
  return err;
});
