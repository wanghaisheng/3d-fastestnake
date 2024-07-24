/**
 * @module isMistake.ts Управляет фиксацией ошибки игрока
 *    @var isMistake Фиксирует ошибку игрока
 *    @function mistakeWasMade Запускается при ошибке
 *    @function noMistakeWasMade Запускается после отработки ошибки
 *    @function checkMistake Проверяет наличие ошибки
 */

/**
 * @var 'true', если игрок совершил ошибку, 'false', если нет
 */
let isMistake = false;
/**
 * Устанавливает isMistake в 'true'
 */
export function mistakeWasMade(): void {
  isMistake = true;
}
/**
 * Устанавливает isMistake в 'false'
 */
export function noMistakeWasMade(): void {
  isMistake = false;
}
/**
 * Возвращает значение isMistake
 * @returns isMistake
 */
export function checkMistake(): boolean {
  return isMistake;
}
