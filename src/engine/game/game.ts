/**
 * @module game.ts Начинает игру
 *    @function game Настройка уровня и запуск игры
 */
import setLevelEvent from "../events/setLevelEvent";
import setLoop from "../time/setLoop";
/**
 * Запуск игры
 * @param start - уровень, с которого начинается игра
 * @description
 *  1. Запускает стартовый уровень
 *  2. Запускает игровой цикл
 *  3 Передает управление змейкой клавиатуре
 */
function game(start: number): void {
  setLevelEvent(start);
  setLoop();
}

export default game;
