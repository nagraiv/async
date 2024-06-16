import read from "../Modules/reader";
import json from "../Modules/parser";

export default class GameSavingLoaderAwait {
    static async load() {
        const buffer = await read();
        const str = await json(buffer);
        return JSON.parse(str);
    }
}
