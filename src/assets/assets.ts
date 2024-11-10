// FOG
import { fogGradient } from "../types/three";

let fogStep: fogGradient = "no";

export function setFogStep(step: fogGradient): void {
  fogStep = step;
}

export function getFogStep(): fogGradient {
  return fogStep;
}
