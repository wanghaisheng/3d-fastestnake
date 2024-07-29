/**
 *  @module lifeLost.ts Обрабатывает событие потери жизни игроком
 *     @function lifeLost Выполняет действия при потере жизни
 */

import { setSnakeOpacity } from "../../Components/Snake/setSnakeOpacity";
import { checkMistake, noMistakeWasMade } from "../lives/isMistake";
import { setLives } from "../lives/lives";
import getSelectors from "../render/getSelectors";
import { stopTimer } from "../time/isTimer";
/**
 *  Запускается при потере жизни игроком
 *  @description
 *      1. Выдает информацию об ошибке и потере жизни
 *      2. Уменьшает количество доступных игроку жизней и определяет конец игры
 *      3. Возвращает игру в состояние ожидания новых действий игрока
 */
function lifeLost(): void {
  const { lifeElement } = getSelectors();
  let attention = false;
  stopTimer();
  if (checkMistake()) {
    setLives(-1);
    const intervalID = setInterval(
      () => {
        attention = !attention;
        setSnakeOpacity(attention ? 0.4 : 1);
        if (lifeElement) lifeElement.style.opacity = `${attention ? 0.4 : 1}`;
      },
      300,
      { once: true }
    );

    setTimeout(() => {
      clearInterval(intervalID);
      setSnakeOpacity(1);
    }, 5000);

    noMistakeWasMade();
  }
}

export default lifeLost;
