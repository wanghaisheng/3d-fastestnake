/**
 * @module timerStepPerLevel.ts Управляет шагом перерисовки экрана на уровне
 *    @var steps Доступные игроку шаги перерисовки
 *    @var timerStepPerLevel Индекс шага перерисовки в массиве steps
 *    @function setTimerStep Задает индекс шага перерисовки
 *    @function getStep Возвращает индекс шага перерисовки
 *    @function getTimerStep Возвращает шаг перерисовки
 *    @function getSpeedLimit Возращает количество шагов перерисовки
 */
/**
 *  @var Шаги перерисовки экрана в миллисекундах
 */
const steps = [0, 300, 150, 120, 100, 75];
/**
 * @var Индекс интервала перерисовки игры в массиве steps
 */
let timerStepPerLevel: number;
/**
 * Задает индекс интервала перерисовки игры
 * @param step Индекс интервала перерисовки
 */
export function setTimerStep(step: number): void {
  timerStepPerLevel = step;
}
/**
 * Возвращает скорость перемещения змейки
 * @returns индекс интервала перерисовки
 */
export function getStep(): number {
  return timerStepPerLevel;
}
/**
 * Возвращает интервал перерисовки игры в миллисекундах
 * @returns интервал перерисовки игры в миллисекундах
 */
export function getTimerStep(): number {
  return steps[timerStepPerLevel];
}
/**
 * Возвращает количество интервалов перерисовки -
 * фиксированных скоростей змейки
 */
export function getSpeedLimit(): number {
  return steps.length - 1;
}
