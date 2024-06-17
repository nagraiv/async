import GameSaving from "./GameSaving";

export default obj => new GameSaving(
    obj.id,
    obj.created,
    obj.userInfo?.id,
    obj.userInfo?.name,
    obj.userInfo?.level,
    obj.userInfo?.points,
    );