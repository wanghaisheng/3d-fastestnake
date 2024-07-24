import { Touch } from "../../types/controls";

const start: Touch = {
  x: 0,
  y: 0,
};

const end: Touch = {
  x: 0,
  y: 0,
};

export const setTouch = (touch: string, posX: number, posY: number) => {
  if (touch === "start") {
    start.x = posX;
    start.y = posY;
  }
  if (touch === "end") {
    end.x = posX;
    end.y = posY;
  }
};

export const getTouch = (): Touch[] => {
  return [start, end];
};
