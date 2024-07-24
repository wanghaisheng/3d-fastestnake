/* eslint-disable react-hooks/exhaustive-deps */

import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Vector3, useFrame, useLoader } from "@react-three/fiber";
import { getField } from "../../engine/field/fieldPerLevel";
import { getFoodEaten } from "../../engine/events/snakeCatchesFoodEvent";
import { getBonusCoord, getCurrentBonus } from "../../engine/bonuses/bonus";
import { getBonusAvailability } from "../../engine/bonuses/bonusAvailableState";
import { getBonuses } from "../../engine/bonuses/bonusesPerLevel";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Object3D } from "three";

const Bonuses: React.FC = () => {
  const heard = useLoader(GLTFLoader, "/heard1.glb");
  const clock = useLoader(GLTFLoader, "/clock.glb");
  const ice = useLoader(GLTFLoader, "/snowflake.glb");
  const bomb = useLoader(GLTFLoader, "/bomb.glb");
  const key = useLoader(GLTFLoader, "/key.glb");
  const doubleApple = useLoader(GLTFLoader, "/doubleApple.glb");
  const wallet = useLoader(GLTFLoader, "/wallet.glb");

  const [bonusPosition, setBonusPosition] = useState<Vector3>([0, 0, 0]);

  const iceRef = useRef<Object3D>();

  useEffect(() => {
    const gridSize = getField();
    if (getBonusCoord()) {
      const bonusX = Math.round(getBonusCoord()[0] - gridSize / 2 - 1);
      const bonusY = Math.round(getBonusCoord()[1] - gridSize / 2 - 1);
      const currentBonusPosition: Vector3 = [bonusX, bonusY, 1];

      setBonusPosition(currentBonusPosition);
    }
  }, [getFoodEaten()]);

  useFrame(() => {
    if (iceRef.current) {
      iceRef.current.rotation.x += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <>
      {getBonusAvailability() && (
        <>
          {/* // <mesh position={bonusPosition}>
          // <boxGeometry args={[1, 1, 1]} /> */}

          {getBonuses()[getCurrentBonus()].type === "snakeBreaksObstacles" && (
            // <meshStandardMaterial color="#453347" />
            <primitive
              ref={iceRef}
              object={bomb.scene}
              position={bonusPosition}
              scale={3}
              rotation={[Math.PI / 2, 0, 0]}
            />
          )}
          {getBonuses()[getCurrentBonus()].type === "snakeStopsGrowing" && (
            // <meshStandardMaterial color="#5d445f" />
            <primitive
              ref={iceRef}
              object={ice.scene}
              position={bonusPosition}
              scale={50}
              rotation={[Math.PI / 4, 4, 4]}
            />
          )}
          {getBonuses()[getCurrentBonus()].type === "snakeCrossesBorders" && (
            // <meshStandardMaterial color="#6e4f71" />
            <primitive
              ref={iceRef}
              object={key.scene}
              position={bonusPosition}
              scale={0.5}
              rotation={[Math.PI / 4, 4, 0]}
            />
          )}
          {getBonuses()[getCurrentBonus()].type === "addExtraTime" && (
            <primitive
              ref={iceRef}
              object={clock.scene}
              position={bonusPosition}
              scale={0.2}
              rotation={[Math.PI / 1, 1, 1]}
            />
            // <meshStandardMaterial color="#7f5a83" />
          )}
          {getBonuses()[getCurrentBonus()].type === "addExtraLives" && (
            <primitive
              ref={iceRef}
              object={heard.scene}
              position={bonusPosition}
              scale={0.1}
              rotation={[Math.PI / 2, 0, 0]}
            />
            // <meshStandardMaterial color="#8c6c91" />
          )}
          {getBonuses()[getCurrentBonus()].type === "addExtraScores" && (
            <primitive
              ref={iceRef}
              object={wallet.scene}
              position={bonusPosition}
              scale={0.5}
              rotation={[Math.PI / 2, 0, 0]}
            />
            // <meshStandardMaterial color="#997d9e" />
          )}
          {getBonuses()[getCurrentBonus()].type === "doubleScoresFood" && (
            <primitive
              ref={iceRef}
              object={doubleApple.scene}
              position={bonusPosition}
              scale={0.25}
              rotation={[Math.PI / 2, 0, 0]}
            />
            // <meshStandardMaterial color="#9c89a4" />
          )}
        </>
      )}
    </>
  );
};

export default Bonuses;
