/**
 *  @module bonusAddScores.ts Управляет бонусом, добавляющим жизни
 *     @var addedScores Фиксирует добавление жизней
 *     @function bonusAddScores Запускается, когда жизни добавлены
 *     @function bonusAddScoresDeactivate Запускается, когда добавить невозможно
 *     @function checkAddScores Возвращает состояние бонуса
 */
/**
 *  @var жизни добавлены - true, жизни не могут быть добавлены - false
 */
let addedScores = false;
/**
 *  Запоминает факт добавления жизней, переводя addedScores в true
 */
export function bonusAddScores(): void {
  addedScores = true;
}
/**
 *  Сбрасывает addedScores в false, когда добавление жизней невозможно
 */
export function bonusAddScoresDeactivate(): void {
  addedScores = false;
}
/**
 *  Возвращает состояние бонуса добавления жизней
 * @returns true - жизни добавлены, false - нет
 */
export function checkAddScores(): boolean {
  return addedScores;
}
