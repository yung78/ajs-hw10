import GameSavingLoader from './GameSavingLoader.js';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
  return saving;
}, (err) => {
  console.log(err);
  return err;
});
