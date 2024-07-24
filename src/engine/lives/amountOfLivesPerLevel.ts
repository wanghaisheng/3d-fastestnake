/**
 * @module amountOfLivesPerLevel.ts Управляет количеством жизней на уровне
 *    @var amountOfLivesPerLevel Количество жизней на уровне
 *    @function setAmountOfLives Задает количество жизней на уровне
 *    @function getAmountOfLives Возвращает количество жизней на уровне
 */

/**
 * @var количество жизней, которое доступно игроку на текущем уровне
 */
let amountOfLivesPerLevel: number;
/**
 * Задает количество жизней, которое доступно игроку на текущем уровне
 * @param amountOfLives
 */
export function setAmountOfLives(amountOfLives: number): void {
  amountOfLivesPerLevel = amountOfLives;
}
/**
 * Возвращает количество жизней, которое доступно игроку на текущем уровне
 * @returns amountOfLivesPerLevel
 */
export function getAmountOfLives(): number {
  return amountOfLivesPerLevel;
}
