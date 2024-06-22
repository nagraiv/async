import GameSavingLoaderAwait from "../AsyncAwait/GameSavingLoaderAwait";
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

describe('Тестируем GameSavingLoader on AsyncAwait', () => {
    it('функция успешно читает и парсит файл с одной записью', async () => {
        expect.assertions(1);
        const testSaving = await GameSavingLoaderAwait.load();
        expect(testSaving).toEqual(saving);
    });

    it('функция успешно читает и парсит файл с массивом', async () => {
        expect.assertions(1);
        const testSavingArray = await GameSavingLoaderAwait.load();
        expect(testSavingArray).toEqual(savingArray);
    });

    it('при ошибке чтения файла выбрасывается ошибка', async () => {
        // помним, что catch возвращает resolve
        expect.assertions(1);
        try {
            await GameSavingLoaderAwait.load();
        } catch (error) {
            expect(error.message).toBe('file reading failed!');
        }
    });
});