import { useThree } from "@react-three/fiber";
import { FieldsProps } from "../../types/field";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Fields: React.FC<FieldsProps> = ({ size }) => {
  const { scene } = useThree();
  const gridRef = useRef<THREE.GridHelper | null>(null);

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
    // Установка тумана
    scene.fog = new THREE.Fog(0x39c09f, 10, 100); // Изначальные параметры тумана
    // Цвет фона
    scene.background = new THREE.Color(0x39c09f); // Задание цвета фона
    // Анимация тумана
    gsap.to(scene.fog, {
      duration: 5, // Длительность анимации (5 секунд)
      near: 40, // Параметр near станет 5 (туман начнётся ближе к камере)
      far: 50, // Параметр far станет 50 (объекты на расстоянии 50 будут полностью затуманены)
      ease: "power2.inOut", // Плавность анимации
    });
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
      {/* <gridHelper
        args={[size, size, 0xd6d6d6, 0xd6d6d6]}
        rotation-x={Math.PI / 2}
        position={[0, 0, 0.1]}
      /> */}
    </group>
  );
};

export default Fields;
