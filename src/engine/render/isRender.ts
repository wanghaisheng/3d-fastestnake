/**
 * @module isRender Управляет фиксацией рендеринга игрового поля
 *    @var isRender Хранит информацию о факте рендера
 *    @function renderComplete Устанавливает рендер как проведенный
 *    @function renderNotComplete Устанавливает рендер как не проведенный
 *    @function checkRenderCompleting Возвращает информацию о факте рендера
 */
/**
 * @var 'true', если идет рендер завершен, 'false', если нет
 */
let isRender = false;
/**
 * Устанавливает isRender в 'true'
 */
export function renderComplete(): void {
  isRender = true;
}
/**
 * Устанавливает isRender в 'false'
 */
export function renderNotComplete(): void {
  isRender = false;
}
/**
 * Возвращает значение isRender
 * @returns isRender
 */
export function checkRenderCompleting(): boolean {
  return isRender;
}
