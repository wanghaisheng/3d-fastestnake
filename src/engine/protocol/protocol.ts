/**
 * @module protocol.ts Управляет протоколом игры
 *    @var protocol Протокол хранит время, событие и его параметры
 *    @function addEvent Вносит событие в протокол
 *    @function setProtocol Помещает в протокол зараннее созданную версию
 *    @function getProtocol Возвращает протокол
 */
import { Event } from "../../types/event";
import { Protocol, ProtocolEvent } from "../../types/protocol";
import { getTimer } from "../time/timer";
/**
 * @var массив событий, происходящих во время игры
 */
let protocol: Protocol = [];
/**
 * Заносит новое событие в протокол
 * @param newEvent новое событие
 */
export function addEvent(newEvent: Event): void {
  let lastTime = 0;
  if (getProtocol().length - 1 > 0) {
    const { time } = getProtocol()[getProtocol().length - 1];
    lastTime = time;
  }
  const protocolEvent: ProtocolEvent = {
    time: newEvent.name === "level is complete" ? lastTime : getTimer(),
    name: newEvent.name,
    value: newEvent.value,
  };
  protocol.push(protocolEvent);
}
/**
 * Помещает сторонний протокол в игру
 * @param currentProtocol сторонний протокол
 */
export function setProtocol(currentProtocol: Protocol): void {
  protocol = [...currentProtocol];
}
/**
 * Возвращает протокол
 * @returns protocol
 */
export function getProtocol(): Protocol {
  return protocol;
}
