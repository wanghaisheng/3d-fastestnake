import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"; // Импортируем THREE для использования типов
import { MushroomProps } from "../../types/obstacle";

function createWhiteDotsOnSphere(radius: number, count: number) {
  const dots = [];

  // Используем спиральный метод для равномерного распределения точек
  const step = Math.PI * (3 - Math.sqrt(5)); // Угол между точками

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; // От -1 до 1
    const radiusAtY = Math.sqrt(1 - y * y); // Радиус в текущем Y
    const theta = step * i; // Угловое расстояние

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    dots.push(
      <mesh key={i} position={[x * radius, y * radius + 5.5, z * radius + 2]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
    );
  }

  return dots;
}

function Mushroom(props: MushroomProps) {
  const { position, rotation, scale } = props;
  const groupRef = useRef<THREE.Group>(null); // Явно указываем тип рефа
  const sphereRadius = 6;
  const dotCount = 30;

  useFrame(() => {
    if (groupRef.current && scale && rotation) {
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
        <sphereGeometry args={[sphereRadius, 32, 32]} />
        <meshStandardMaterial color={"red"} transparent={true} opacity={1} />
      </mesh>

      {/* Белые точки на шляпке гриба */}
      {createWhiteDotsOnSphere(sphereRadius, dotCount)}
    </group>
  );
}

export default Mushroom;
