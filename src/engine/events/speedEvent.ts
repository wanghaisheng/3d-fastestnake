/**
 *  @module speedEvent.ts Управляет скоростью змейки
 *     @var currentDirection Фиксирует направление змейки при изменении скорости
 *     @function speedElement Изменяет скорость змейки на шаг за одно нажатие
 */
import { Event } from "../../types/event";
import findLastMoveDirection from "../protocol/findLastMoveDirection";
import { checkTimerWorking } from "../time/isTimer";
/**
 * @var Хранит последнее направление движения змейки
 */
let currentDirection: string | number;
/**
 * Создает событие изменения скорости на шаг нажатием стрелок по оси движения
 * @description
 *  создает "пустое" событие, которое будет игнорироваться за пределами функции
 *  находит в протоколе последнюю запись о направлении движения змейки,
 *  если это не изменение скорости, запоминает это направление,
 *  если игра идет, а одна из стрелок по оси движения нажата,
 *  создается соответствующее событие вместо "пустого", которое и возвращается
 * @param e событие нажатия на клавишу
 * @returns событие изменения скорости змейки
 */
function speedEvent(e: KeyboardEvent): Event {
  let newEvent: Event = Object.assign({}, { name: "", value: "" });
  if (!checkTimerWorking()) return newEvent;
  const moveDirection = findLastMoveDirection();
  if (!isNaN(+moveDirection.value)) currentDirection = moveDirection.value;
  if (
    (moveDirection.name === "X" &&
      currentDirection === 1 &&
      e.code === "ArrowRight") ||
    (moveDirection.name === "X" &&
      currentDirection === -1 &&
      e.code === "ArrowLeft") ||
    (moveDirection.name === "Y" &&
      currentDirection === 1 &&
      e.code === "ArrowUp") ||
    (moveDirection.name === "Y" &&
      currentDirection === -1 &&
      e.code === "ArrowDown")
  )
    newEvent = Object.assign({}, { name: moveDirection.name, value: "+" });
  if (
    (moveDirection.name === "X" &&
      currentDirection === 1 &&
      e.code === "ArrowLeft") ||
    (moveDirection.name === "X" &&
      currentDirection === -1 &&
      e.code === "ArrowRight") ||
    (moveDirection.name === "Y" &&
      currentDirection === 1 &&
      e.code === "ArrowDown") ||
    (moveDirection.name === "Y" &&
      currentDirection === -1 &&
      e.code === "ArrowUp")
  )
    newEvent = Object.assign({}, { name: moveDirection.name, value: "-" });

  return newEvent;
}

export default speedEvent;
