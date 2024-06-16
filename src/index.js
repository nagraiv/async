import GameSavingLoader from "./Promises/GameSavingLoader";
import GameSavingLoaderAwait from "./AsyncAwait/GameSavingLoaderAwait";

console.log('=======TASK_1========');
GameSavingLoader.load().then((saving) => {
    console.log('GameSaving object: ', saving);
}, (error) => {
    console.log('Error occured: ', error.message);
});

console.log('=======TASK_2========');

(async () => {
    try {
        const saving = await GameSavingLoaderAwait.load();
        console.log('GameSaving object: ', saving);
    } catch (error) {
        console.log('Error occured: ', error.message);
    }
})();