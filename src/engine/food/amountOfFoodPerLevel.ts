/**
 * @module amountOfFoodPerLevel Управление количеством еды на уровне
 *    @var amountOfFoodPerLevel Общее количество еды
 *    @function setAmountOfFood Задает общее кличество еды
 *    @function getAmountOfFood Возвращает общее кличество еды
 */
/**
 * @var количество объектов еды, которое необходимо съесть змейке, чтобы успешно пройти уровень
 */
let amountOfFoodPerLevel: number;
/**
 * Задает количество объектов еды, которое необходимо съесть змейке, чтобы успешно пройти уровень
 * @param amountOfFood
 */
export function setAmountOfFood(amountOfFood: number): void {
  amountOfFoodPerLevel = amountOfFood;
}
/**
 * Возвращает количество объектов еды, которое необходимо съесть змейке, чтобы успешно пройти уровень
 * @returns amountOfFoodPerLevel
 */
export function getAmountOfFood(): number {
  return amountOfFoodPerLevel;
}
