import { useFrame, useThree } from "@react-three/fiber";
import { getField } from "../../engine/field/fieldPerLevel";
import Fields from "../Field/Field";
import { getObstacles } from "../../engine/obstacles/obstaclesPerLevel";
import { ObstaclesFix, ObstaclesX, ObstaclesY } from "../Obstacles/Obstacles";
import { getBonuses } from "../../engine/bonuses/bonusesPerLevel";
import Bonuses from "../Bonuses/Bonuses";
import Snake from "../Snake/Snake";
import Food from "../Food/Food";
import { useRef } from "react";
import { Vector3 } from "three";
import { getFoodCoord } from "../../engine/food/food";
import { getStep } from "../../engine/time/timerStepPerLevel";
import getSnakeMoveDirection from "../../engine/snake/getSnakeMoveDirection";
import checkTimerStep from "../../engine/time/checkTimerStep";
import { checkContact } from "../../engine/events/isContact";
import { checkTimerWorking } from "../../engine/time/isTimer";

function GamePlay() {
  const { camera } = useThree();
  const gridSize = getField();
  const headPosition = useRef(new Vector3(0, 0, 0));
  const targetPosition = useRef(new Vector3(0, 0, 0));
  const gapStart = useRef(new Vector3(0, 0, 0));
  const gapEnd = useRef(new Vector3(0, 0, 0));
  const lightPoint = getFoodCoord();
  const xOffset =
    getSnakeMoveDirection()[0] === "Y"
      ? 0
      : getSnakeMoveDirection()[1] === "left"
      ? -1
      : 1;
  const yOffset =
    getSnakeMoveDirection()[0] === "X"
      ? 0
      : getSnakeMoveDirection()[1] === "up"
      ? -1
      : 1;
  const standUp =
    checkTimerStep() || checkContact() || !checkTimerWorking() ? 0 : 1;
  // const gapStep = 10 * getStep();
  gapEnd.current.x = 50 * xOffset * standUp;
  gapEnd.current.y = 50 * yOffset * standUp;
  useFrame(() => {
    targetPosition.current.lerp(headPosition.current, 0.001 * getStep());
    gapStart.current.lerp(gapEnd.current, 0.001 * getStep());
    camera.position.set(
      targetPosition.current.x + gapStart.current.x,
      targetPosition.current.y - 25 - gapStart.current.y,
      25
    );
    camera.updateProjectionMatrix();
  });

  return (
    <mesh>
      <ambientLight intensity={0.1} />
      <directionalLight castShadow position={[0, 0, 5]} intensity={0.5} />
      <pointLight
        castShadow
        position={[
          Math.round(lightPoint[0] - gridSize / 2 - 1),
          Math.round(lightPoint[1] - gridSize / 2 - 1),
          70,
        ]}
        intensity={12000}
      />
      <Fields size={gridSize} />
      {getObstacles().length !== 0 && (
        <>
          <ObstaclesX />
          <ObstaclesY />
          <ObstaclesFix />
        </>
      )}
      {getBonuses().length !== 0 && <Bonuses />}
      <Snake
        onHeadPositionUpdate={(position) =>
          headPosition.current.set(...position)
        }
      />
      <Food />
    </mesh>
  );
}

export default GamePlay;
