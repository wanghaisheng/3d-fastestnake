/**
 * @module timer.ts Управляет учетом затраченного игроком времени на уровень
 *    @var timer Затраченное время
 *    @function setTimer Задает затраченное время
 *    @function getTimer Возвращает затраченное время
 */
/**
 * @var текущее время, затраченное игроком на прохождение уровня
 */
let timer = 0;
/**
 * Устанавливает текущее время при каждой перерисовке игрового поля
 * @param interval продолжительность пребывания игрока на текущем уровне
 */
export function setTimer(interval: number): void {
  timer += interval;
}
/**
 * Возвращает текущее время, затраченное игроком на прохождение уровня
 * @returns timer
 */
export function getTimer(): number {
  return timer;
}
