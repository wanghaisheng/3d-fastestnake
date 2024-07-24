/**
 *  @module interruptGameEvent.ts Управляет событием окончания игры
 *     @var isInterrupt фиксирует прерывание игры
 *     @function interruptGameEvent создание события и вызов исполняющей функции
 *     @function setNewGame сброс фиксации прерывания игры
 *     @function getInterruptGame возвращает состояние прерывания игры
 */
import gameOverEvent from "./gameOverEvent";
import levelCompleteEvent from "./levelCompleteEvent";
/**
 *  @var фиксирует прерывание игры
 */
let isInterrupt = false;
/**
 *  Создает событие в зависимости от причины завершения игры
 *  @return true, если игра прерывается, false, если нет
 */
export function interruptGameEvent(): void {
  isInterrupt = gameOverEvent() ? true : levelCompleteEvent() ? true : false;
}
/**
 *  Новая игра не может быть прервана
 */
export function setNewGame(): void {
  isInterrupt = false;
}
/**
 * Возвращает состояние прерывания игры
 * @returns true, если игра прервана, и false, если нет
 */
export function getInterruptGame(): boolean {
  return isInterrupt;
}
