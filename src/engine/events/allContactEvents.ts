/**
 * @module allContactEvents.ts Проверяет запрещенные контакты змейки
 *    @function allContactEvents Объединяет все запрещенные контакты змейки
 */
import { SnakeHeadCoord } from "../../types/snake";
import { checkMistake } from "../lives/isMistake";
import { stopTimer } from "../time/isTimer";
import snakeBorderContactEvent from "./snakeBorderContactEvent";
import snakeHeadBodyContactEvent from "./snakeHeadBodyContactEvent";
import snakeObstacleContactEvent from "./snakeObstacleContactEvent";
/**
 *  Тестирует контакт головы змейки с краями поля, препятствиями и своим телом
 *  @param snakeHead Текущие координаты головы змейки
 *  @description Если змейка касается запрещенного объекта, игра останавливается
 *  @returns новые координаты головы змейки, скорректированные при контакте
 */
function allContactEvents(snakeHead: SnakeHeadCoord): SnakeHeadCoord {
  let { ...newSnakeHeadCoord } = snakeHead;
  newSnakeHeadCoord = snakeBorderContactEvent(newSnakeHeadCoord);
  newSnakeHeadCoord = snakeObstacleContactEvent(newSnakeHeadCoord);
  newSnakeHeadCoord = snakeHeadBodyContactEvent(newSnakeHeadCoord);

  if (checkMistake()) stopTimer();

  return newSnakeHeadCoord;
}

export default allContactEvents;
