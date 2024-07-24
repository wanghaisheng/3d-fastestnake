import { GeometryProps } from "../../../../types/three";
import SnakeEyeApple from "./SnakeEyeApple";
import SnakeEyePupil from "./SnakeEyePupil";

function SnakeEyes(props: GeometryProps) {
  return (
    <group {...props}>
      <SnakeEyeApple />
      <SnakeEyePupil />
    </group>
  );
}

export default SnakeEyes;
