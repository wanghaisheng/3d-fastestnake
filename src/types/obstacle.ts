/**
 * @type obstacleContactProps Аргументы функции, проверяющей контакты препятствий
 */

import { Vector3 } from "@react-three/fiber";

/**
 * Функция, проверяющая контакты препятствий, получает параметры:
 *   1. type - тип препятствия по направлению движения
 *   2. i - индекс препятствия в соответствуюшем массиве
 *   3. twist - порядок считывания х и y из массива координат
 *   4. coord - массив координат препятствий типа type
 *   5. step - массив шагов препятствий типа type
 */
export interface obstacleContactProps {
  i: number;
  twist: number[];
  coord: number[][];
  step: number[];
}
/**
 * Функция, реализующая отскок препятствия от преграды получает параметры:
 *  1. obstacleContactProps
 *  2. cell - координаты [x, y] препятствия, от которого возможен отскок
 */
export interface newObstacleStep extends obstacleContactProps {
  cell: number[];
}

export type obstacleData = {
  coord: number[][];
  step: number[];
};

export type hedgehogProps = {
  key: number;
  coord: Vector3;
  direction: number[];
  index: number;
  line: string;
};
