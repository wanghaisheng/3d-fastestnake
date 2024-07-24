/**
 *  @module setLoop.ts Управляет игровым циклом
 *     @function setLoop Рекурсивная функция, позволяющая менять скорость игры
 */
import {
  getInterruptGame,
  interruptGameEvent,
} from "../events/interruptGameEvent";
import playLevel from "../levels/playLevel";
import render from "../render/render";
import { checkTimerWorking } from "./isTimer";
import { setTimer } from "./timer";
import { getTimerStep } from "./timerStepPerLevel";
/**
 * Запускает setLoop() каждые timerStepPerLevel миллисекунд в котором:
 *  - проверяет условия прерывания игры
 *  - запускается функция управления игрой playLevel()
 *  - производится рендер актуального состояния игрового поля
 *  - устанавливается актуальное значение интервала перерисовки игрового поля
 */
function setLoop() {
  interruptGameEvent();
  if (!getInterruptGame()) {
    playLevel();
    render();
  }
  if (checkTimerWorking()) setTimer(getTimerStep());

  setTimeout(setLoop, getTimerStep());
}

export default setLoop;
