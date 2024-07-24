import { Vector3 } from "three";
import SnakeScull from "./snakeScull/SnakeScull";
import SnakeEyes from "./snakeEyes/SnakeEyes";
import SnakeJaw from "./snakeJaw/SnackJaw";
import SnakeTongue from "./snakeTongue/snakeTongue";
import { GeometryProps } from "../../../types/three";

function SnakeHead(props: GeometryProps) {
  return (
    <group {...props}>
      <SnakeScull
        position={new Vector3(0.055, -0.1, 0)}
        rotation-x={0}
        rotation-y={22}
        rotation-z={55}
        scale={0.4}
      />
      <SnakeEyes
        position={[0.05, 0.04, -0.54]}
        rotation-x={23}
        rotation-y={0.04}
        rotation-z={55}
        scale={0.4}
      />
      <SnakeJaw
        position={[0.07, 0.005, 0.14]}
        rotation-x={0}
        rotation-y={0}
        rotation-z={54.95}
        scale={0.4}
      />
      <SnakeTongue
        position={[0.05, 0.2, 0]}
        rotation-x={0}
        rotation-y={0}
        rotation-z={22}
        scale={0.2}
      />
    </group>
  );
}

export default SnakeHead;
