import read from "../Modules/reader";
import json from "../Modules/parser";

export default class GameSavingLoader {
    static load() {
        return read()
            .then(buffer => json(buffer))
            .then(str => JSON.parse(str))
            .catch(e => console.log('Something went wrong...\n', e.message));
    }
}