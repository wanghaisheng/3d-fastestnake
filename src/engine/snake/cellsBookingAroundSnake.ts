/**
 * @module cellsBookingAroundSnake.ts Выделяет место змейке для начала движения
 *    @function cellsBookingAroundSnake Резервирует пустые ячейки вокруг змейки
 */
/**
 * Вычисляет координаты ячеек в квадратной области по стороне и левому краю
 * @param side Сторона квадратной области с пустыми ячейками вокруг змейки
 * @param pos Положение змейки на старте уровня
 * @returns массив с координатами зарезервированных ячеек вокруг змейки
 */
function cellsBookingAroundSnake(pos: number): number[][] {
  const booking: number[][] = [];
  for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
      booking.push([pos + row - 1, pos + col - 1]);
    }
  }

  return booking;
}

export default cellsBookingAroundSnake;
