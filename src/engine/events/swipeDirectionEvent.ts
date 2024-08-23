import { Event } from "../../types/event";
import * as TIMER from "../time/isTimer";
import findLastMoveDirection from "../protocol/findLastMoveDirection";
import { getInterruptGame } from "./interruptGameEvent";
import { getTouch } from "./touchEvent";
import { checkPause, touchPauseEvent } from "./pauseEvent";
import { getSnakeHeadParams } from "../snake/snake";
// import { checkMistake } from "../lives/isMistake";
import { SnakeHeadCoord } from "../../types/snake";
import { checkContact } from "./isContact";

let previousHeadParams: SnakeHeadCoord = {
  snakeHeadCoordX: 0,
  snakeHeadCoordY: 0,
  snakeHeadStepX: 0,
  snakeHeadStepY: 0,
};

const swipeDirectionEvent = (): Event => {
  const newEvent: Event = {
    name: "",
    value: 0,
  };
  if (
    /* checkMistake() || */
    getInterruptGame() ||
    (previousHeadParams.snakeHeadCoordX ===
      getSnakeHeadParams().snakeHeadCoordX &&
      previousHeadParams.snakeHeadCoordY ===
        getSnakeHeadParams().snakeHeadCoordY)
  ) {
    previousHeadParams.snakeHeadCoordX = 0;
    previousHeadParams.snakeHeadCoordY = 0;
    return newEvent;
  }
  const moveDirection = findLastMoveDirection();
  if (checkContact()) moveDirection.name = "";
  if (
    getSnakeHeadParams().snakeHeadStepX !== 0 ||
    getSnakeHeadParams().snakeHeadStepY !== 0
  )
    previousHeadParams = Object.assign({}, getSnakeHeadParams());
  const xDiff = getTouch()[1].x - getTouch()[0].x;
  const yDiff = getTouch()[1].y - getTouch()[0].y;
  if (Math.abs(Math.abs(xDiff) - Math.abs(yDiff)) > 1 && !checkPause()) {
    if (Math.abs(xDiff) < Math.abs(yDiff)) {
      if (
        yDiff > 0 &&
        moveDirection.name !== "Y" &&
        findLastMoveDirection().name !== ""
      ) {
        newEvent.name = "Y";
        newEvent.value = -1;
      } else if (yDiff < 0 && moveDirection.name !== "Y") {
        newEvent.name = "Y";
        newEvent.value = 1;
      }
    } else {
      if (xDiff > 0 && moveDirection.name !== "X") {
        newEvent.name = "X";
        newEvent.value = 1;
      } else if (xDiff < 0 && moveDirection.name !== "X") {
        newEvent.name = "X";
        newEvent.value = -1;
      }
    }
    if (!TIMER.checkTimerWorking() && !checkPause()) {
      TIMER.startTimer();
      return newEvent;
    }
    if (Math.abs(xDiff) < Math.abs(yDiff)) {
      const snakeStep =
        getSnakeHeadParams().snakeHeadStepY === 0
          ? previousHeadParams.snakeHeadStepY
          : getSnakeHeadParams().snakeHeadStepY;
      if (yDiff > 0 && moveDirection.name === "Y") {
        newEvent.name = "Y";
        newEvent.value = snakeStep !== 1 ? "+" : "-";
      } else if (yDiff < 0 && moveDirection.name === "Y") {
        newEvent.name = "Y";
        newEvent.value = snakeStep !== -1 ? "+" : "-";
      }
    } else {
      const snakeStep =
        getSnakeHeadParams().snakeHeadStepX === 0
          ? previousHeadParams.snakeHeadStepX
          : getSnakeHeadParams().snakeHeadStepX;
      if (xDiff > 0 && moveDirection.name === "X") {
        newEvent.name = "X";
        newEvent.value = snakeStep !== -1 ? "+" : "-";
      } else if (xDiff < 0 && moveDirection.name === "X") {
        newEvent.name = "X";
        newEvent.value = snakeStep !== 1 ? "+" : "-";
      }
    }
  } else if (Math.abs(Math.abs(xDiff) - Math.abs(yDiff)) < 1) touchPauseEvent();

  if (newEvent.name !== "" && !checkPause()) TIMER.startTimer();

  return newEvent;
};

export default swipeDirectionEvent;
