import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"; // Импортируем THREE для использования типов

interface MushroomProps {
  position?: [number, number, number]; // Позиция гриба (по умолчанию [0, 0, 0])
  rotation?: [number, number, number]; // Вращение гриба (по умолчанию [0, 0, 0])
  scale?: [number, number, number]; // Масштаб гриба (по умолчанию [0.1, 0.1, 0.1])
}

function Mushroom({
  position = [0, 0.5, 0.5],
  rotation = [1, 0, 0],
  scale = [0.08, 0.08, 0.08],
}: MushroomProps) {
  const groupRef = useRef<THREE.Group>(null); // Явно указываем тип рефа

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.scale.set(scale[0], scale[1], scale[2]); // Масштабируем гриб
      groupRef.current.rotation.set(rotation[0], rotation[1], rotation[2]); // Вращаем гриб
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Ствол гриба */}
      <mesh position={[0, -4, 0]} scale={[0.8, 1.5, 0.8]}>
        <cylinderGeometry args={[5, 6, 12, 9]} />
        <meshStandardMaterial color={"yellow"} />
      </mesh>

      {/* Шляпка гриба */}
      <mesh position={[0, 6, 0]} scale={[1.2, 0.7, 1.2]}>
        <sphereGeometry args={[6, 32, 32]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </group>
  );
}

export default Mushroom;
