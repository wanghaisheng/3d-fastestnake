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
import setSnakePosition from "../Snake/setSnakePosition";
import * as SNAKE from "../../engine/snake/snake";
import { positionAnimationProps } from "../../types/three";
import { getStep } from "../../engine/time/timerStepPerLevel";

// const previousTargetPosition: Vector3 = new Vector3(0, 0, 5);

function GamePlay() {
  const { camera } = useThree();
  const cameraPosition: positionAnimationProps = {
    initialPosition: [...setSnakePosition(0, SNAKE.getPreviousSnake())],
    finalPosition: [...setSnakePosition(0, SNAKE.getSnakeBodyCoord())],
  };
  console.log(cameraPosition.initialPosition[1], camera.position);
  cameraPosition.initialPosition[1] = cameraPosition.initialPosition[1] - 25;
  cameraPosition.initialPosition[2] = cameraPosition.initialPosition[2] + 25;
  cameraPosition.finalPosition[1] = cameraPosition.finalPosition[1] - 25;
  cameraPosition.finalPosition[2] = cameraPosition.finalPosition[2] + 25;

  const gridSize = getField();
  const headPosition = useRef(new Vector3(0, 0, 0));

  const targetPosition = useRef(new Vector3(0, 0, 0));

  const lightPoint = getFoodCoord();

  let ratioX = 43;
  let ratioY = 37;
  if (
    Math.min(window.innerHeight, window.innerWidth) < 1000 &&
    Math.max(window.innerHeight, window.innerWidth) > 1000
  )
    ratioX = 35;
  if (Math.max(window.innerHeight, window.innerWidth) < 1000) {
    ratioX = 41;
    ratioY = 43;
  }
  useFrame(() => {
    targetPosition.current.lerp(headPosition.current, 0.01 * getStep());
    camera.position.set(
      Math.abs(Math.round(targetPosition.current.x)) <= ratioX
        ? targetPosition.current.x
        : camera.position.x,
      (Math.abs(Math.round(targetPosition.current.y)) <= ratioY + 25
        ? targetPosition.current.y
        : camera.position.y) - 25,
      25
    );
    camera.updateProjectionMatrix();
  });
  // previousTargetPosition.x = targetPosition.current.x;
  // previousTargetPosition.y = targetPosition.current.y;

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
