/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { useState, useEffect } from "react";
import { Vector3 } from "@react-three/fiber";
import { getObstaclesFixCoord } from "../../engine/obstacles/obstaclesFix";
import { getField } from "../../engine/field/fieldPerLevel";
import {
  getObstaclesStepX,
  getObstaclesXCoord,
} from "../../engine/obstacles/obstaclesX";
import { getTimer } from "../../engine/time/timer";
import {
  getObstaclesStepY,
  getObstaclesYCoord,
} from "../../engine/obstacles/obstaclesY";
import Hedgehog from "../../assets/hedgehogModel/Hedgehog";

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
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"#cccc00"} />
        </mesh>
      ))}
    </>
  );
};
export const ObstaclesX: React.FC = () => {
  const gridSize = getField();
  const [obstaclesXCoord, setObstaclesXCoord] = useState<Array<Vector3>>([
    [0, 0, 0],
  ]);
  const [direction, setDirection] = useState(getObstaclesStepX());
  useEffect(() => {
    const xObstacles: Vector3[] = getObstaclesXCoord().map((coord) => {
      const xObstacleX = Math.round(coord[0] - gridSize / 2 - 1);
      const xObstaclesY = Math.round(coord[1] - gridSize / 2 - 1);
      return [xObstacleX, xObstaclesY, 0];
    });
    setDirection(getObstaclesStepX());
    setObstaclesXCoord(xObstacles);
  }, [getTimer()]);
  return (
    <>
      {obstaclesXCoord.map((coord: Vector3, index: number) => (
        <Hedgehog
          key={Math.random()}
          coord={coord}
          direction={direction}
          index={index}
          line={"X"}
        />
      ))}
    </>
  );
};

export const ObstaclesY: React.FC = () => {
  const gridSize = getField();
  const [obstaclesYCoord, setObstaclesYCoord] = useState<Array<Vector3>>([
    [0, 0, 0],
  ]);
  const [direction, setDirection] = useState(getObstaclesStepY());
  useEffect(() => {
    const yObstacles: Vector3[] = getObstaclesYCoord().map((coord) => {
      const yObstacleX = Math.round(coord[0] - gridSize / 2 - 1);
      const yObstaclesY = Math.round(coord[1] - gridSize / 2 - 1);
      return [yObstacleX, yObstaclesY, 0];
    });
    setDirection(getObstaclesStepY());
    setObstaclesYCoord(yObstacles);
  }, [getTimer()]);
  return (
    <>
      {obstaclesYCoord.map((coord: Vector3, index: number) => (
        <Hedgehog
          key={Math.random()}
          coord={coord}
          direction={direction}
          index={index}
          line={"Y"}
        />
      ))}
    </>
  );
};
