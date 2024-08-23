/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useState, useEffect } from "react";
import { Vector3 } from "@react-three/fiber";
import { animated, useSprings } from "@react-spring/three";
import { getObstaclesFixCoord } from "../../engine/obstacles/obstaclesFix";
import { getField } from "../../engine/field/fieldPerLevel";
import * as OBSTACLES_X from "../../engine/obstacles/obstaclesX";
import { getTimer } from "../../engine/time/timer";
import * as OBSTACLES_Y from "../../engine/obstacles/obstaclesY";
import Hedgehog from "../../assets/hedgehogModel/Hedgehog";
import { positionAnimationProps } from "../../types/three";
import { easeLinear } from "d3-ease";
import Mushroom from "../../assets/mushroomModel/Mushroom";

export const ObstaclesFix: React.FC = () => {
  const gridSize = getField();
  const [obstaclesFixCoord, setObstaclesFixCoord] = useState<Array<Vector3>>([
    [0, 0, 0],
  ]);
  useEffect(() => {
    const fixObstacles: Vector3[] = getObstaclesFixCoord().map((coord) => {
      const fixObstacleX = Math.round(coord[0] - gridSize / 2 - 1);
      const fixObstaclesY = Math.round(coord[1] - gridSize / 2 - 1);
      return [fixObstacleX, fixObstaclesY, 0];
    });
    setObstaclesFixCoord(fixObstacles);
  }, [getTimer()]);
  return (
    <>
      {obstaclesFixCoord.map((coord: Vector3) => (
        <mesh key={Math.random()} position={coord}>
          <Mushroom
            position={[0, 0, 0.5]}
            rotation={[1.57, 0, 0]}
            scale={[0.08, 0.08, 0.08]}
          />
        </mesh>
      ))}
    </>
  );
};
export const ObstaclesX: React.FC = () => {
  const gridSize = getField();
  const [obstaclesXCoord, setObstaclesXCoord] = useState<
    positionAnimationProps[]
  >([
    {
      initialPosition: [0, 0, 0],
      finalPosition: [0, 0, 0],
    },
  ]);
  const [direction, setDirection] = useState(OBSTACLES_X.getObstaclesStepX());
  useEffect(() => {
    const xObstacles = OBSTACLES_X.getObstaclesXCoord().map((coord, index) => {
      const initialPosition = [
        Math.round(coord[0] - gridSize / 2 - 1) - direction[index],
        Math.round(coord[1] - gridSize / 2 - 1),
        0,
      ];
      const finalPosition = [
        Math.round(coord[0] - gridSize / 2 - 1),
        Math.round(coord[1] - gridSize / 2 - 1),
        0,
      ];
      return { initialPosition, finalPosition };
    });
    setDirection(OBSTACLES_X.getObstaclesStepX());
    setObstaclesXCoord(xObstacles);
  }, [getTimer()]);
  const move = useSprings(
    obstaclesXCoord.length,
    obstaclesXCoord.map((item) => ({
      from: { position: item.initialPosition },
      to: { position: item.finalPosition },
      config: {
        duration: 800,
        easing: easeLinear,
      },
    }))
  );
  return (
    <>
      {move.map((coord, index: number) => (
        <animated.group
          key={Math.random()}
          position={coord.position.to((x, y, z) => [x, y, z])}
        >
          <Hedgehog direction={direction} index={index} line={"X"} />
        </animated.group>
      ))}
    </>
  );
};
export const ObstaclesY: React.FC = () => {
  const gridSize = getField();
  const [obstaclesYCoord, setObstaclesYCoord] = useState<
    positionAnimationProps[]
  >([
    {
      initialPosition: [0, 0, 0],
      finalPosition: [0, 0, 0],
    },
  ]);
  const [direction, setDirection] = useState(OBSTACLES_Y.getObstaclesStepY());
  useEffect(() => {
    const yObstacles = OBSTACLES_Y.getObstaclesYCoord().map((coord, index) => {
      const initialPosition = [
        Math.round(coord[0] - gridSize / 2 - 1),
        Math.round(coord[1] - gridSize / 2 - 1) - direction[index],
        0,
      ];
      const finalPosition = [
        Math.round(coord[0] - gridSize / 2 - 1),
        Math.round(coord[1] - gridSize / 2 - 1),
        0,
      ];
      return { initialPosition, finalPosition };
    });
    setDirection(OBSTACLES_Y.getObstaclesStepY());
    setObstaclesYCoord(yObstacles);
  }, [getTimer()]);
  const move = useSprings(
    obstaclesYCoord.length,
    obstaclesYCoord.map((item) => ({
      from: { position: item.initialPosition },
      to: { position: item.finalPosition },
      config: {
        duration: 800,
        easing: easeLinear,
      },
    }))
  );
  return (
    <>
      {move.map((coord, index: number) => (
        <animated.group
          key={Math.random()}
          position={coord.position.to((x, y, z) => [x, y, z])}
        >
          <Hedgehog direction={direction} index={index} line={"Y"} />
        </animated.group>
      ))}
    </>
  );
};
