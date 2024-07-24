/**
 * @module getFreeCell.ts Рандомная генерация свободных ячеек
 *      @function getFreeCell Дает координаты свободной ячейки
 */
import { getField } from "./fieldPerLevel";
/**
 * Находит на игровом поле свободную ячейку и возвращает ее координаты
 * @param bookedCells массив занятых ячеек игрового поля
 * @description рандомно генерирует координаты ячейки пока не получит свободную
 * @returns координаты freeCellX и freeCellY свободной ячеек игрового поля
 */
const getFreeCell = (bookedCells: number[][]): number[] => {
  let freeCellX: number;
  let freeCellY: number;
  do {
    freeCellX = Math.floor(Math.random() * getField()) + 1;
    freeCellY = Math.floor(Math.random() * getField()) + 1;
  } while (
    bookedCells.some(
      (coord) => coord[0] === freeCellX && coord[1] === freeCellY
    )
  );

  return [freeCellX, freeCellY];
};

export default getFreeCell;
