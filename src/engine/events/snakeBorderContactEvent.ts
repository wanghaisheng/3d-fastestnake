/**
 * @module snakeBorderContactEvent.ts Управляет контактом змейки с краями поля
 *    @function snakeBorderContactEvent Останавливает или переносит змейку
 */
import { SnakeHeadCoord } from "../../types/snake";
import { getCrossesBorders } from "../bonuses/bonusSnakeCrossesBorders";
import { getField } from "../field/fieldPerLevel";
import { isContact } from "./isContact";
import isCross from "./isCross";
/**
 * Срабатывает при контакте головы змейки с краем поля
 * @param snakeHead параметры головы змейки
 * @description
 *  1. если голова змейки выходит за пределы поля
 *  2. возвращает змейку к краю поля если бонус пересечения границ не работает
 *  3. переносит змейку на другой край поля, если бонус работает
 *  3. запускает соответствующую функцию создания события
 * @returns скорректированные при контакте с краем поля параметры головы змейки
 */
function snakeBorderContactEvent(snakeHead: SnakeHeadCoord): SnakeHeadCoord {
  let borderContact = false;
  if (snakeHead.snakeHeadCoordX === 0) {
    snakeHead.snakeHeadCoordX = getCrossesBorders() ? getField() : 1;
    borderContact = true;
  }
  if (snakeHead.snakeHeadCoordX > getField()) {
    snakeHead.snakeHeadCoordX = getCrossesBorders() ? 1 : getField();
    borderContact = true;
  }
  if (snakeHead.snakeHeadCoordY === 0) {
    snakeHead.snakeHeadCoordY = getCrossesBorders() ? getField() : 1;
    borderContact = true;
  }
  if (snakeHead.snakeHeadCoordY > getField()) {
    snakeHead.snakeHeadCoordY = getCrossesBorders() ? 1 : getField();
    borderContact = true;
  }
  if (borderContact) {
    snakeHead = getCrossesBorders()
      ? isCross(snakeHead)
      : isContact(snakeHead, "border");
  }

  return snakeHead;
}

export default snakeBorderContactEvent;
