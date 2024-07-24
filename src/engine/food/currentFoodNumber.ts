/**
 * @module currentFoodNumber Управление порядковым номером текущей еды
 *    @var currentFoodNumber Номер текущей еды
 *    @function setCurrentFoodNumber Задает номер текущей еды
 *    @function getCurrentFoodNumber Возвращает номер текущей еды
 *    @function howMuchIsLeftToEat Вычисляет, сколько ещё еды осталось съесть
 */
import { getProtocol } from "../protocol/protocol";
import { getAmountOfFood } from "./amountOfFoodPerLevel";
/**
 * @var порядковый номер отображаемой еды на текущем уровне
 */
let currentFoodNumber: number;
/**
 * Вычисляет порядковый номер отображаемой еды на текущем уровне
 * @param currentLevel - текущий уровень игры
 * @description Суммируем все записи о генерации еды на текущем уровне и заносим сумму в currentFoodNumber
 */
export function setCurrentFoodNumber(currentLevel: number): void {
  const currentLevelStart = getProtocol().findIndex(
    (notice) => notice.name === "start level" && notice.value === currentLevel
  );
  currentFoodNumber = getProtocol()
    .slice(currentLevelStart)
    .filter((notice) => notice.name === "set food").length;
}
/**
 * Возвращает порядковый номер отображаемой еды на текущем уровне
 * @returns currentFoodNumber
 */
export function getCurrentFoodNumber(): number {
  return currentFoodNumber;
}
/**
 * Вычисляет, сколько осталось съесть еды на текущем уровне
 * @returns howMuchIsLeftToEat
 */
export function howMuchIsLeftToEat(): number {
  const howMuchIsLeftToEat = getAmountOfFood() - getCurrentFoodNumber();

  return howMuchIsLeftToEat;
}
