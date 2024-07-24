/**
 *  @module lifeLost.ts Обрабатывает событие потери жизни игроком
 *     @function lifeLost Выполняет действия при потере жизни
 */

import { setSnakeOpacity } from "../../Components/Snake/setSnakeOpacity";
import { checkMistake, noMistakeWasMade } from "../lives/isMistake";
import { setLives } from "../lives/lives";
import { stopTimer } from "../time/isTimer";
/**
 *  Запускается при потере жизни игроком
 *  @description
 *      1. Выдает информацию об ошибке и потере жизни
 *      2. Уменьшает количество доступных игроку жизней и определяет конец игры
 *      3. Возвращает игру в состояние ожидания новых действий игрока
 */
function lifeLost(): void {
  let attention = false;
  stopTimer();
  if (checkMistake()) {
    setLives(-1);
    setInterval(
      () => {
        attention = !attention;
        setSnakeOpacity(attention ? 0.4 : 1);
      },
      300,
      { once: true }
    );

    noMistakeWasMade();
  }
}

export default lifeLost;
