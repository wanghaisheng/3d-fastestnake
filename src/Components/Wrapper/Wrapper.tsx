// import React, { useRef, useEffect } from "react";
import { ReactNode } from "react";
import GameInfo from "../GameInfo/GameInfo";
import swipeDirectionEvent from "../../engine/events/swipeDirectionEvent";
import { setTouch } from "../../engine/events/touchEvent";
import protocolExecutor from "../../engine/protocol/protocolExecutor";
import GameButtons from "../GameButtons/GameButtons";
import { useMenuStore } from "../../store/menuStore";

function Wrapper({ children }: { children: ReactNode }) {
  const { isVisible } = useMenuStore();
  const startTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const touches = e.changedTouches;
    setTouch("start", touches[0].clientX, touches[0].clientY);
  };
  const endTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const touches = e.changedTouches;
    setTouch("end", touches[0].clientX, touches[0].clientY);
    if (!isVisible) protocolExecutor(swipeDirectionEvent());
  };
  return (
    <div className="wrapper" onTouchStart={startTouch} onTouchEnd={endTouch}>
      <GameInfo />
      {children}
      <GameButtons />
    </div>
  );
}

export default Wrapper;
