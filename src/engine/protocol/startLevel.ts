/**
 * @module startLevel.ts Запуск текущего уровня
 *    @function startLevel Выполняет все процедуры по настройкам уровня
 */
import { levelNotCompleted } from "../levels/isLevelComplete";
import { getField } from "../field/fieldPerLevel";
import setFood from "../food/setFood";
import setSnakeStartEvent from "../events/setSnakeStartEvent";
import setObstacleEvent from "../events/setObstacleEvent";
import { obstacleSpeedReset } from "../obstacles/obstacleSpeed";
import { removeBonus } from "../bonuses/bonusAvailableState";
import { catchBonus } from "../bonuses/bonusCatchingState";
/**
 * Запускает текущий уровень игры
 * @description
 * 1. Объявляет уровень незавершенным
 * 2. Помещает змейку, которая на старте не имеет тела, в центр поля
 * 3. Генерирует координаты препятствий и первой еды
 */
function startLevel(): void {
  levelNotCompleted();
  setSnakeStartEvent([
    Math.floor(getField() / 2) + 1,
    Math.floor(getField() / 2) + 1,
  ]);
  setObstacleEvent();
  setFood(1);
  obstacleSpeedReset();
  catchBonus(false);
  removeBonus();
}

export default startLevel;
