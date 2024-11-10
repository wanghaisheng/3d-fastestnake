import { useRef, useMemo } from "react";
import * as THREE from "three";
import { RockProps } from "../../types/obstacle";

const Rock = (props: RockProps) => {
  const {
    position,
    rotation = [0, 0, 0],
    scale = [1, 1, 1],
    color = 0x808080, // Серый цвет для камней
  } = props;
  const groupRef = useRef<THREE.Group>(null);

  // Используем useMemo для кэширования геометрии и материала
  const geometry = useMemo(() => {
    const geom = new THREE.IcosahedronGeometry(0.4); // Увеличим геометрию для камней
    geom.scale(1.2, 1, 1.2); // Добавим немного искажения, чтобы камни выглядели более естественными
    return geom;
  }, []);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        flatShading: true,
        color: color,
      }),
    [color]
  );

  if (groupRef.current) {
    groupRef.current.scale.set(scale[0], scale[1], scale[2]);
    groupRef.current.rotation.set(rotation[0], rotation[1], rotation[2]);
  }

  return (
    <group ref={groupRef} position={position}>
      <mesh
        geometry={geometry}
        material={material}
        scale={1} // Установим фиксированный масштаб
        rotation-y={0} // Установим фиксированное вращение
      />
    </group>
  );
};

export default Rock;
