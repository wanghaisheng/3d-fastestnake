/**
 * @module turnSnakeVertically.ts Управляет поворотом змейки вверх / вниз
 *    @function turnSnakeVertically Изменяет параметры головы змейки
 */
import * as SNAKE from "../snake/snake";
/**
 * Запускается в ответ на нажатие игроком стрелок вверх / вниз
 * @param stepX Новое значение шага головы змейки по вертикали
 */
function turnSnakeVertically(stepY: number): void {
  SNAKE.setSnakeHeadParams({
    ...SNAKE.getSnakeHeadParams(),
    snakeHeadStepX: 0,
    snakeHeadStepY: stepY,
  });
}

export default turnSnakeVertically;
