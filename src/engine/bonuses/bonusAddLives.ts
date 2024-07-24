/**
 *  @module bonusAddLives.ts Управляет бонусом, добавляющим жизни
 *     @var addedTime Фиксирует добавление жизней
 *     @function bonusAddLives Запускается, когда жизни добавлены
 *     @function bonusAddLivesDeactivate Запускается, когда добавить невозможно
 *     @function checkAddLives Возвращает состояние бонуса
 */
/**
 *  @var жизни добавлены - true, жизни не могут быть добавлены - false
 */
let addedLives = false;
/**
 *  Запоминает факт добавления жизней, переводя addedLives в true
 */
export function bonusAddLives(): void {
  addedLives = true;
}
/**
 *  Сбрасывает addedLives в false, когда добавление жизней невозможно
 */
export function bonusAddLivesDeactivate(): void {
  addedLives = false;
}
/**
 *  Возвращает состояние бонуса добавления жизней
 * @returns true - жизни добавлены, false - нет
 */
export function checkAddLives(): boolean {
  return addedLives;
}
