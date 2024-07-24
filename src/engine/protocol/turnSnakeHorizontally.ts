/**
 * @module turnSnakeHorizontally.ts Управляет поворотом змейки вправо / влево
 *    @function turnSnakeHorizontally Изменяет параметры головы змейки
 */
import * as SNAKE from "../snake/snake";
/**
 * Запускается в ответ на нажатие игроком стрелок вправо / влево
 * @param stepX Новое значение шага головы змейки по горизонтали
 */
function turnSnakeHorizontally(stepX: number): void {
  SNAKE.setSnakeHeadParams({
    ...SNAKE.getSnakeHeadParams(),
    snakeHeadStepX: stepX,
    snakeHeadStepY: 0,
  });
}

export default turnSnakeHorizontally;
