import { useThree } from "@react-three/fiber";
import { FieldsProps } from "../../types/field";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { getFogStep } from "../../assets/assets";
// import gsap from "gsap";

const Fields: React.FC<FieldsProps> = ({ size }) => {
  const { scene } = useThree();
  const gridRef = useRef<THREE.GridHelper | null>(null);
  // Установка тумана
  const fogProp =
    getFogStep() === "no"
      ? 100
      : getFogStep() === "light"
      ? 57
      : getFogStep() === "middle"
      ? 47
      : 0;
  if (fogProp !== 0) {
    scene.fog = new THREE.Fog(0x39c09f, 25, fogProp);
  } else scene.fog = new THREE.FogExp2(0x39c09f, 0.03);
  // Цвет фона
  scene.background = new THREE.Color(0x39c09f);

  useEffect(() => {
    const resolution = new THREE.Vector2(size, size);
    // Создание и настройка сетки
    const gridHelper = new THREE.GridHelper(
      resolution.x, // Ширина сетки
      resolution.y, // Глубина сетки
      0xffffff, // Цвет делений по оси X
      0xffffff // Цвет делений по оси Z
    );
    // Устанавливаем позицию сетки
    gridHelper.position.set(0, 0, 0.1);
    // Поворот сетки в плоскость XZ
    gridHelper.rotation.x = Math.PI / 2;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.3;

    // Добавление сетки в сцену
    scene.add(gridHelper);
    gridRef.current = gridHelper;
    return () => {
      scene.remove(gridHelper);
    };
  }, [scene, size]);
  return (
    <group>
      <mesh position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[size * 20, size * 20]} />
        <meshStandardMaterial color="#56f854" />
      </mesh>
    </group>
  );
};

export default Fields;
