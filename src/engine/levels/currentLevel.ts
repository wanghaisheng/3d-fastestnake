/**
 * @module currentLevel.ts Управление текущим уровнем игры
 *    @var currentLevel Текущий уровень
 *    @function setCurrentLevel Задает текущий уровень
 *    @function getCurrentLevel Возвращает текущий уровень
 */
/**
 * @var текущий уровень игры
 */
let currentLevel: number;
/**
 * Устанавливает текущий уровень игры
 * @param level
 */
export function setCurrentLevel(level: number): void {
  currentLevel = level;
}
/**
 * Возвращает текущий уровень игры
 * @returns currentLevel
 */
export function getCurrentLevel(): number {
  return currentLevel;
}
