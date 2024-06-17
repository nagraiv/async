import read from "../Modules/reader";
import json from "../Modules/parser";
import transform from "../Modules/transform";

export default class GameSavingLoader {
    static load() {
        return read()
            .then(buffer => json(buffer))
            .then(str => JSON.parse(str))
            .then(result => Array.isArray(result) ? result.map(transform) : transform(result))
            .catch(e => console.log('Something went wrong...\n', e.message));
    }
}