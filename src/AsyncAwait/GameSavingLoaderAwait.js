import read from "../Modules/reader";
import json from "../Modules/parser";
import transform from "../Modules/transform";

export default class GameSavingLoaderAwait {
    static async load() {
        const buffer = await read();
        const str = await json(buffer);
        const gameSaving = JSON.parse(str);
        return Array.isArray(gameSaving) ? gameSaving.map(transform) : transform(gameSaving);
    }
}
