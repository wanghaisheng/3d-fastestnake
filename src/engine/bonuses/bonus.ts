/**
 * @module bonus.ts Управляет бонусами на текущем уровне
 *    @var currentBonus Индекс текущего бонуса в массиве всех бонусов
 *    @var bonusCoord Координаты текущего бонуса
 *    @function setCurrentBonus Задает индекс текущего бонуса
 *    @function setBonusCoord Задает координаты текущего бонуса
 *    @function getCurrentBonus Возвращает индекс текущего бонуса
 *    @function getBonusCoord Возвращает координаты бонуса
 */
/**
 * @var Индекс текущего бонуса в массиве всех бонусов
 */
let currentBonus: number;
/**
 * @var Массив координат X и Y текущего бонуса
 */
let bonusCoord: number[];
/**
 * Задает индекс текущего бонуса в массиве всех бонусов
 * @param index номер текущего бонуса в массиве бонусов
 * @usedIn bonusHandlers.ts
 */
export function setCurrentBonus(index: number) {
  currentBonus = index;
}
/**
 * Задает координаты X и Y текущего бонуса
 * @param coord координаты текущего бонуса
 * @usedIn setBonusEvent.ts
 */
export function setBonusCoord(coord: number[]) {
  bonusCoord = [...coord];
}
/**
 * Возвращает индекс текущего бонуса в массиве всех бонусов
 * @returns currentBonus индекс текущего бонуса
 * @usedIn Bonuses.tsx
 */
export function getCurrentBonus(): number {
  return currentBonus;
}
/**
 * Возвращает координаты X и Y текущего бонуса
 * @returns bonusCoord координаты текущего бонуса
 * @usedIn Bonuses.tsx, setBonusEvent.ts, contactBonusObstacle.ts
 */
export function getBonusCoord(): number[] {
  return bonusCoord;
}
