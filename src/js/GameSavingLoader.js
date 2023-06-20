import read from './reader.js';
import json from './parser.js';
import GameSaving from './GameSaving.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .then((result) => {
        const saving = JSON.parse(result);
        return new GameSaving(
          saving.id,
          saving.created,
          saving.userInfo.id,
          saving.userInfo.name,
          saving.userInfo.level,
          saving.userInfo.points,
        );
      })
      .catch((err) => err);
  }
}
