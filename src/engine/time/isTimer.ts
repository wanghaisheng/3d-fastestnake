/**
 * @module isTimer.ts Управляет запуском таймера игрового времени
 *    @var isTimer Состояние таймера
 *    @function startTimer Запуск таймера
 *    @function stopTimer Остановка таймера
 *    @function checkTimerWorking Проверка состояния таймера
 */
/**
 * @var 'true', если идет отсчет времени, 'false', если нет
 */
let isTimer = false;
/**
 * Устанавливает isTimer в 'true'
 */
export function startTimer(): void {
  isTimer = true;
}
/**
 * Устанавливает isTimer в 'false'
 */
export function stopTimer(): void {
  isTimer = false;
}
/**
 * Возвращает значение isTimer
 * @returns isTimer
 */
export function checkTimerWorking(): boolean {
  return isTimer;
}
