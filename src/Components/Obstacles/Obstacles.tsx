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

// function hadgehog() {
//   const points = [];
//   for (let i = 0; i < 10; i++) {
//     points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
//   }
//   const geometry = new THREE.LatheGeometry(points);
//   const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
//   const lathe = new THREE.Mesh(geometry, material);

//   return lathe;
// }

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
        // <mesh
        //   key={Math.random()}
        //   position={coord}
        //   rotation={[0, 0, ((direction[index] - 1) / 2) * 3.2]}
        // >
        //   <coneGeometry args={[1, 2, 15, 1, false, 4.7, 3.12]} />
        //   <meshStandardMaterial color={"#ffdf00"} />
        // </mesh>
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
        // <>
        //   <mesh
        //     key={Math.random()}
        //     position={coord}
        //     rotation={[0, 0, direction[index] * -1.6]}
        //   >
        //     <coneGeometry args={[1, 2, 15, 1, false, 4.7, 3.12]} />
        //     <meshStandardMaterial color={"#ffff66"} />
        //   </mesh>
        //   <mesh
        //     key={Math.random()}
        //     position={coord}
        //     rotation={[0, 0, direction[index] * -1.6]}
        //   >
        //     <latheGeometry />
        //     <meshStandardMaterial color={"#ffff66"} />
        //   </mesh>
        // </>
      ))}
    </>
  );
};
