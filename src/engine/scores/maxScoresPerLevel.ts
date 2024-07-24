/**
 * @module maxScoresPerLevel.ts Управляет максимальным количеством очков на уровне
 *    @var maxScoresPerLevel Максимальное количество очков на уровне
 *    @function setMaxScores Задает максимальное количество очков на уровне
 *    @function getMaxScores Возвращает максимальное количество очков на уровне
 */
/**
 * @var максимальное количество очков, которое можно набрать на уровне
 */
let maxScoresPerLevel: number;
/**
 * Задает максимальное количество очков, которое можно набрать на уровне
 * @param scores
 */
export function setMaxScores(scores: number): void {
  maxScoresPerLevel = scores;
}
/**
 * Возвращает максимальное количество очков, которое можно набрать на уровне
 * @returns maxScoresPerLevel
 */
export function getMaxScores(): number {
  return maxScoresPerLevel;
}
