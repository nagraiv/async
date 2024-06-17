export default class GameSaving {
    static #count = 0;
    constructor(id = this.count, created = new Date().getTime(), userInfoId, userInfoName, userInfoLevel, userInfoPoints) {
        this.id = id;
        this.created = created;
        this.userInfo = {
            id: userInfoId,
            name: userInfoName,
            level: userInfoLevel,
            points: userInfoPoints,
        }
    }

    get count() {
        this.#count += 1;
        return this.#count;
    }
}

