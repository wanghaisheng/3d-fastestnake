/**
 *  @module bonusAddTime.ts Управляет бонусом, добавляющим время
 *     @var addedTime Фиксирует добавление времени
 *     @function bonusAddTime Запускается, когда время добавлено
 *     @function bonusAddTimeDeactivate Запускается, когда добавить невозможно
 *     @function checkAddTime Возвращает состояние бонуса
 */
/**
 *  @var время добавлено - true, время не может быть добавлено - false
 */
let addedTime = false;
/**
 *  Запоминает факт добавления времени, переводя addedTime в true
 */
export function bonusAddTime(): void {
  addedTime = true;
}
/**
 *  Сбрасывает addedTime в false, когда добавление времени невозможно
 */
export function bonusAddTimeDeactivate(): void {
  addedTime = false;
}
/**
 *  Возвращает состояние бонуса добавления времени
 * @returns true - время добавлено, false - нет
 */
export function checkAddTime(): boolean {
  return addedTime;
}
