/**
 * @module contactSnakeBodyObstacle.ts Управляет контактом препятствий со змейкой
 *    @function contactSnakeBodyObstacle Изменяет направление движение препятствий
 */
import { obstacleContactProps } from "../../types/obstacle";
import * as SNAKE from "../snake/snake";
import obstacleBounce from "./obstacleBounce";
/**
 * При контакте препятствий меняет направление их движения
 * @param props объект с аргументами функции, проверяющей контакты препятствий
 * @description При контакте с телом и головой змейки фиксируется ошибка
 * @returns измененный шаг препятствия, коснувшегося тела змейки
 */
function contactSnakeBodyObstacle(props: obstacleContactProps): number {
  const { i, step }: { i: number; step: number[] } = props;
  SNAKE.getSnakeBodyCoord().forEach((pos) => {
    step[i] = obstacleBounce({ ...props, cell: pos });
  });

  return step[i];
}

export default contactSnakeBodyObstacle;
