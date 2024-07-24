/**
 *  @module setLevelEvent.ts Устанавливает уровень в игре
 *     @function setLevelEvent Создание нового уровня
 */
import { setCurrentLevel } from "../levels/currentLevel";
import getLevelProps from "../levels/getLevelProps";
import { setMaxLevel } from "../levels/maxLevel";
import protocolExecutor from "../protocol/protocolExecutor";
/**
 *  Задает уровень в игре
 * @param level номер уровня, который загружается в игру
 * @description
 * 1. Задает максимальный уровень
 * 2. Устанавливает стартовый уровень и его настройки
 * 3. Фиксирует событие запуска уровня в игре
 */
function setLevelEvent(level: number) {
  setMaxLevel();
  setCurrentLevel(level);
  getLevelProps(level);
  protocolExecutor({
    name: "start level",
    value: level,
  });
}

export default setLevelEvent;
