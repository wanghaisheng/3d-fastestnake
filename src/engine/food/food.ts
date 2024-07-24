/**
 * @module food.ts Управляет параметрами еды на текущем уровне
 *    @var foodScores Количество баллов за еду
 *    @var foodCoord Координаты еды
 *    @function setFoodScores Задает количество баллов за еду
 *    @function setFoodCoord Задает координаты еды
 *    @function getFoodScores Возвращает количество баллов за еду
 *    @function getFoodCoord Возвращает координаты еды
 */

/**
 * @var Количество баллов, которые получает игрок за съеденый объект еды
 */
let foodScores: number;
/**
 * @var Массив координат X и Y текущей еды
 */
let foodCoord: number[];
/**
 * Задает количество баллов, которые игрок получает за каждую съеденную еду
 * @param score
 */
export function setFoodScores(score: number) {
  foodScores = score;
}
/**
 * Задает координаты X и Y текущей еды
 * @param coord
 */
export function setFoodCoord(coord: number[]) {
  foodCoord = [...coord];
}
/**
 * Возвращает количество баллов, которые игрок получает за каждую съеденную еду
 * @returns foodScores
 */
export function getFoodScores(): number {
  return foodScores;
}
/**
 * Возвращает координаты X и Y текущей еды
 * @returns foodCoord
 */
export function getFoodCoord(): number[] {
  return foodCoord;
}
