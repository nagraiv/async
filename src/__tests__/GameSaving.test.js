import GameSaving from "../Modules/GameSaving";

describe('Тестируем конструктор GameSaving', () => {
    it('создаётся объект GameSaving', () => {
        const saving = new GameSaving(undefined, undefined, 8, 'Sveta', 1, 0)
        expect(saving instanceof GameSaving).toBeTruthy();
        expect(saving.id).toBe(1);
    });

    it('генерируется уникальный id', () => {
        const nextSaving = new GameSaving(undefined, undefined, 3, 'Jack', 7, 6790)
        expect(nextSaving.id).toBe(2);
    });
});