import { Event } from "./event";

export interface ProtocolEvent extends Event {
  time: number;
}
export type Protocol = ProtocolEvent[];
