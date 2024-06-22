import GameSavingLoader from "../Promises/GameSavingLoader";
import GameSaving from "../Modules/GameSaving";

jest.mock('../Modules/reader');

beforeEach(() => {
    jest.resetAllMocks();
});

const saving = new GameSaving(10, 1546300800, 1, 'Hitman', 10, 2000);
const saving2 = new GameSaving(20, 1546300800, 5, 'Verner', 3, 400);
const savingArray = [
    saving,
    saving2
];

describe('Тестируем GameSavingLoader on Promises', () => {
    it('функция успешно читает и парсит файл с одной записью', () => {
        expect.assertions(1);
        return expect(GameSavingLoader.load()).resolves.toEqual(saving);
    });

    it('функция успешно читает и парсит файл с массивом', () => {
        expect.assertions(1);
        return expect(GameSavingLoader.load()).resolves.toEqual(savingArray);
    });

    it('при ошибке чтения файла обрабатываем ошибку', () => {
        // помним, что catch возвращает resolve
        expect.assertions(1);
        return expect(GameSavingLoader.load()).resolves.toEqual({
            success: false,
            error: 'file reading failed!',
        });
    });
});