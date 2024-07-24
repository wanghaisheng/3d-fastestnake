/**
 * @module maxLevel.ts Управляет максимальным уровнем игры
 *    @var maxLevel Уровень, после прохождения которого игра заканчивается
 *    @function setMaxLevel Устанавливает максимальный уровень
 *    @function getMaxLevel Возвращает максимальный уровень
 */
import levels from "./levels.json";
/**
 * @var количество уровней игры, записанных в массиве levels
 */
let maxLevel: number;
/**
 * Задает количество уровней игры
 */
export function setMaxLevel(): void {
  maxLevel = levels.length;
}
/**
 * Возвращает количество уровней игры
 * @returns maxLevel
 */
export function getMaxLevel(): number {
  return maxLevel;
}
