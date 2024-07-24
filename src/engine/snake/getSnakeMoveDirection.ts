/**
 * @module getSnakeMoveDirection.ts Определяет направление движения змейки
 *    @function getSnakeMoveDirection Возвращает массив с направляющими
 */
import { getSnakeBodyCoord } from "./snake";
/**
 * Находит направление движения змейки по координатам головы и второго звена
 * @returns массив с двумя элементами - осью и стороной
 */
function getSnakeMoveDirection(): string[] {
  const currentLine =
    getSnakeBodyCoord()[0][0] !== getSnakeBodyCoord()[1][0] ? "X" : "Y";
  const currentSide =
    currentLine === "X" && getSnakeBodyCoord()[0][0] > getSnakeBodyCoord()[1][0]
      ? "right"
      : currentLine === "X" &&
        getSnakeBodyCoord()[0][0] < getSnakeBodyCoord()[1][0]
      ? "left"
      : currentLine === "Y" &&
        getSnakeBodyCoord()[0][1] > getSnakeBodyCoord()[1][1]
      ? "up"
      : currentLine === "Y" &&
        getSnakeBodyCoord()[0][1] < getSnakeBodyCoord()[1][1]
      ? "down"
      : "";

  return [currentLine, currentSide];
}

export default getSnakeMoveDirection;
