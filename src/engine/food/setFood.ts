/**
 * @module setFood.ts Управляет едой на текущем уровне
 *    @function setFood Задает параметры текущей еды
 */
import setFoodEvent from "../events/setFoodEvent";
import { setFoodScores } from "./food";
import { howMuchIsLeftToEat, setCurrentFoodNumber } from "./currentFoodNumber";
import { getCurrentLevel } from "../levels/currentLevel";
/**
 * Выполняет все действия, связанные с появлением новой еды на игровом поле
 * @param score Количество очков, которое получает игрок за съеденную еду
 */
function setFood(score: number): void {
  setFoodScores(score);
  setCurrentFoodNumber(getCurrentLevel());
  if (howMuchIsLeftToEat() !== 0) setFoodEvent();
}

export default setFood;
