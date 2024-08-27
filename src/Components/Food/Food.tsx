/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";

import { useState, useEffect } from "react";

import { Vector3 } from "@react-three/fiber";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { getFoodCoord } from "../../engine/food/food";
import { getField } from "../../engine/field/fieldPerLevel";
import { getFoodEaten } from "../../engine/events/snakeCatchesFoodEvent";
import { howMuchIsLeftToEat } from "../../engine/food/currentFoodNumber";

const Food: React.FC = () => {
  const gltf = useLoader(GLTFLoader, "/apple.glb");

  const [foodPosition, setFoodPosition] = useState<Vector3>([0, 0, 0.5]);
  useEffect(() => {
    const updatedPosition = getFoodCoord();
    const gridSize = getField();
    const adjustedX = Math.round(updatedPosition[0] - gridSize / 2 - 1);
    const adjustedY = Math.round(updatedPosition[1] - gridSize / 2 - 1);
    const adjustedPosition: Vector3 = [adjustedX, adjustedY, 0.5];
    setFoodPosition(adjustedPosition);
  }, [getFoodEaten()]);
  return (
    <>
      {howMuchIsLeftToEat() !== 0 && (
        <primitive object={gltf.scene} position={foodPosition} scale={0.4} />
      )}
    </>
  );
};

export default Food;
