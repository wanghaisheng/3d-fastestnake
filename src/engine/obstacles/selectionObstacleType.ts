/**
 * @module selectionObstacleType.ts Разделяет препятствия по типам
 *    @function selectionObstacleType Находит препятствия требуемого типа
 */
import * as X from "./obstaclesX";
import * as Y from "./obstaclesY";
import * as FIX from "./obstaclesFix";
/**
 * Из массива всех препятствий извлекает препятствия требуемого типа
 * @param type тип препятствия
 * @returns массив ключевых слов препятствий требуемого типа
 */
function selectionObstacleType(type: string) {
  const obstaclesType =
    type === "x"
      ? [...X.getObstaclesX()]
      : type === "y"
      ? [...Y.getObstaclesY()]
      : [...FIX.getObstaclesFix()];

  return obstaclesType;
}

export default selectionObstacleType;
