/**
 * @module levelComplete.ts Выполняет действия при успешном завершении уровня
 *    @function levelComplete Закрывает текущий уровень и запускает следующий
 */
import { checkTimerWorking, stopTimer } from "../time/isTimer";
import * as LEVEL from "../levels/currentLevel";
import { getMaxLevel } from "../levels/maxLevel";
import { addEvent, getProtocol } from "./protocol";
import setLevelEvent from "../events/setLevelEvent";
import { getScores } from "../scores/scores";
import { getMaxScores } from "../scores/maxScoresPerLevel";
import { setBonuses } from "../bonuses/bonusesPerLevel";
import { useMenuStore } from "../../store/menuStore";
/**
 * Отрабатывает успешное завершение текущего уровня игры
 * @description
 *  - увеличивает номер текущего уровня на 1 и ставит игру на паузу
 *  - при победе заносит результат в протокол и останавливает игру
 */
function levelComplete(): void {
  const { toggleModal, selectTitleMenu } = useMenuStore.getState();
  LEVEL.setCurrentLevel(LEVEL.getCurrentLevel() + 1);
  if (LEVEL.getCurrentLevel() - getMaxLevel() === 1) {
    stopTimer();
    toggleModal();
    selectTitleMenu("You WIN! Press OK to replay...");
    addEvent({
      name: "you win",
      value: `your scores: ${getScores()}/${getMaxScores()}`,
    });
    localStorage.setItem("protocol", JSON.stringify(getProtocol()));
    location.reload();
  } else if (checkTimerWorking()) {
    stopTimer();
    toggleModal();
    selectTitleMenu(
      `Level ${
        LEVEL.getCurrentLevel() - 1
      } is complete! Congratulation! Well done! It's time to Level ${LEVEL.getCurrentLevel()}`
    );
    setBonuses([]);
    setLevelEvent(LEVEL.getCurrentLevel());
  }
}

export default levelComplete;
