/**
 * @module obstacleSpeed.ts Управляет скоростью движения препятствий
 *    @var obstaclesSpeed интервал движения для всех препятствия
 *    @function obstacleSpeedReset Обнуляет интервал движения всех препятствий
 *    @function obstacleSpeedCounter Суммирует интервалы рендера
 *    @function getObstacleSpeed Возвращает суммарный интервал
 */
/**
 * @var миллисекунды, кратные timerStepPerLevel, когда препятствие стоит
 */
let obstacleSpeed = 0;
/**
 * Сбрасывает значение obstacleSpeed в ноль
 */
export function obstacleSpeedReset(): void {
  obstacleSpeed = 0;
}
/**
 * Суммирует интервалы рендера timerStepPerLevel в переменной obstacleSpeed
 */
export function obstacleSpeedCounter(): void {
  obstacleSpeed++; // = speed / getTimerStep();
}
/**
 * Возвращает суммарный интервал
 * @returns obstacleSpeed
 */
export function getObstacleSpeed(): number {
  return obstacleSpeed;
}
