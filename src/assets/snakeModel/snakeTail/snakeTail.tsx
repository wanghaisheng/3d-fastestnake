import { getSnakeOpacity } from "../../../Components/Snake/setSnakeOpacity";
import { GeometryProps } from "../../../types/three";
import SnakeTailGeometry from "./SnakeTailGeometry";
import { DoubleSide, Vector3 } from "three";

function SnakeTail(props: GeometryProps) {
  return (
    <group {...props}>
      <mesh
        position={new Vector3(0, 0, 0)}
        rotation-x={0}
        rotation-y={22}
        rotation-z={11}
        scale={1}
      >
        <SnakeTailGeometry />
        <meshStandardMaterial
          color={0x44abda}
          side={DoubleSide}
          opacity={getSnakeOpacity()}
          transparent
        />
      </mesh>
    </group>
  );
}

export default SnakeTail;
