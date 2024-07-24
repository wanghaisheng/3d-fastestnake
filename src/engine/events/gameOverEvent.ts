/**
 *  @module gameOverEvent.ts Управляет событием окончания игры
 *     @function gameOverEvent Создание события и вызов исполняющей функции
 */
import { getLives } from "../lives/lives";
import { getProtocol } from "../protocol/protocol";
import protocolExecutor from "../protocol/protocolExecutor";
import { getSnakeHeadParams } from "../snake/snake";
import { getTimePerLevel } from "../time/timePerLevel";
import { getTimer } from "../time/timer";
import noMoves from "./noMovesEvent";
/**
 *  Создает событие в зависимости от причины поражения и завершает игру
 *  @returns true, если игра проиграна, и false, если нет
 */
function gameOverEvent(): boolean {
  const { name } = getProtocol()[getProtocol().length - 1];
  let gameOver = false;
  if (getLives() < 0 && name !== "game over") {
    gameOver = true;
    protocolExecutor({ name: "game over", value: "lives limit" });
  }
  if (getTimePerLevel() - getTimer() < 0 && name !== "game over") {
    gameOver = true;
    protocolExecutor({ name: "game over", value: "time limit" });
  }
  if (noMoves(getSnakeHeadParams())) {
    gameOver = true;
    protocolExecutor({ name: "game over", value: "no moves" });
  }

  return gameOver;
}

export default gameOverEvent;
