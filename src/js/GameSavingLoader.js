import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((result) => json(result))
      .catch((err) => err);
  }
}
