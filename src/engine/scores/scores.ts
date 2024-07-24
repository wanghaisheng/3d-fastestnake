/**
 * @module scores.ts Управляет набором очков игроком на уровне
 *    @var scores Набранное игроком количество очков
 *    @function setScores Задает набранное игроком количество очков
 *    @function getScores Возвращает набранное игроком количество очков
 */
/**
 * @var текущее количество баллов, набранное игроком при прохождении уровня
 */
let scores = 0;
/**
 * Устанавливает текущее количество баллов
 * @param score новые баллы, полученные игроком при прохождении уровня
 */
export function setScores(score: number): void {
  scores += score;
}
/**
 * Возвращает текущие баллы, набранные игроком при прохождении уровня
 * @returns scores
 */
export function getScores(): number {
  return scores;
}
