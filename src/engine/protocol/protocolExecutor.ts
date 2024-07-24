/**
 * @module protocolExecutor.ts Управление ходом игры
 *    @function protocolExecutor Отрабатывает каждое новое событие в протоколе
 */
import startLevel from "./startLevel";
import gameOver from "./gameOver";
import levelComplete from "./levelComplete";
import turnSnakeHorizontally from "./turnSnakeHorizontally";
import turnSnakeVertically from "./turnSnakeVertically";
import lifeLost from "./lifeLost";
import { addEvent } from "./protocol";
import { Event } from "../../types/event";
import foodEaten from "./foodEaten";
import bonus from "./bonuses";
import setSpeed from "./setSpeed";
/**
 * Выполняет последнюю запись в протоколе игры
 */
function protocolExecutor(newEvent: Event): void {
  addEvent(newEvent);
  const { name, value } = newEvent;
  switch (name) {
    case "start level":
      startLevel();
      break;
    case "X":
      value === "+"
        ? setSpeed(1)
        : value === "-"
        ? setSpeed(-1)
        : turnSnakeHorizontally(+value);
      break;
    case "Y":
      value === "+"
        ? setSpeed(1)
        : value === "-"
        ? setSpeed(-1)
        : turnSnakeVertically(+value);
      break;
    case "food eaten":
      foodEaten();
      break;
    case "bonus":
      bonus();
      break;
    case "level is complete":
      levelComplete();
      break;
    case "life lost":
      lifeLost();
      break;
    case "game over":
      gameOver(String(value));
      break;
  }
}

export default protocolExecutor;
