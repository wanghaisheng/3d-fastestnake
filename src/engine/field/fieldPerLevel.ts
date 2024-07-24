/**
 * @module fieldPerLevel.ts Управление размерами игрового поля
 *    @var fieldPerLevel количество ячеек по стороне квадратного поля
 *    @function setField Задает количество ячеек по стороне поля
 *    @function getField Возвращает количество ячеек по стороне поля
 */
/**
 * @var количество ячеек по стороне квадратного игрового поля на текущем уровне
 */
let fieldPerLevel: number;
/**
 * Задает количество ячеек по стороне квадратного игрового поля на текущем уровне
 * @param size
 */
export function setField(size: number): void {
  if (size < 5) {
    alert("The field cannot have less than 5 cells on each side!");
    fieldPerLevel = 5;
  } else fieldPerLevel = size;
  if (size % 2 === 0) {
    alert("The field cannot have even cells on each side!");
    fieldPerLevel = size + 1;
  } else fieldPerLevel = size;
}
/**
 * Возвращает количество ячеек по стороне квадратного игрового поля на текущем уровне
 * @returns field
 */
export function getField(): number {
  return fieldPerLevel;
}
