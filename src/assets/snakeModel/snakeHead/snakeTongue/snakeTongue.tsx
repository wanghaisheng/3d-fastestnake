import { getSnakeOpacity } from "../../../../Components/Snake/setSnakeOpacity";
import { GeometryProps } from "../../../../types/three";
import SnakeTongueGeometry from "./SnakeTongueGeometry";
import { DoubleSide } from "three";

function SnakeTongue(props: GeometryProps) {
  return (
    <mesh {...props}>
      <SnakeTongueGeometry />
      <meshStandardMaterial
        color={"red"}
        side={DoubleSide}
        opacity={getSnakeOpacity()}
        transparent
      />
    </mesh>
  );
}

export default SnakeTongue;
