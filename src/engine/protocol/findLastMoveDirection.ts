/**
 * @module findLastMoveDirection.ts Поиск текущего направления движения змейки
 *    @function findLastMoveDirection Возвращает направление движения змейки
 */
import { Event } from "../../types/event";
import { getProtocol } from "./protocol";
/**
 * Ищет последнее изменение направления движения змейки
 *    находит в протоколе все события старта нового уровня
 *    находит индекс последнего старта и удаляет все предыдущие события
 *    на последнем уровне ищет изменения направления движения змейки
 * @returns направление движения змейки или "", если направление не найдено
 */
function findLastMoveDirection(): Event {
  const allStartLevelEvents = getProtocol().filter(
    (event) => event.name === "start level"
  );
  const lastLevelNumber =
    allStartLevelEvents[allStartLevelEvents.length - 1].value;
  const lastStartLevelEvent = getProtocol().findIndex(
    (event) => event.name === "start level" && event.value === lastLevelNumber
  );
  const moveDirections = getProtocol()
    .slice(lastStartLevelEvent)
    .filter((event) => event.name === "X" || event.name === "Y");
  const moveDirection: Event =
    moveDirections.length !== 0
      ? {
          name: moveDirections[moveDirections.length - 1].name,
          value: moveDirections[moveDirections.length - 1].value,
        }
      : { name: "", value: "" };

  return moveDirection;
}

export default findLastMoveDirection;
