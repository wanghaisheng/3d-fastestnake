import SnakeForehead from "./snakeForehead/SnakeForehead";
import SnakeNoseBridge from "./snakeNoseBridge/SnakeNoseBridge";
import SnakeNose from "./snakeNose/SnakeNose";
import SnakeUpperLip from "./snakeUpperLip/SnakeUpperLip";
import SnakeNoseTip from "./snakeNoseTip/SnakeNoseTip";
import SnakeHeadBack from "./snakeHeadBack/SnakeHeadBack";
import SnakeCheeks from "./snakeCheeks/SnakeCheeks";
import SnakeEyelids from "./snakeEyelids/snakeEyelids";
import SnakeNostrils from "./snakeNostrils/SnakeNostrils";
import SnakeUpperPalate from "./snakeUpperPalate/SnakeUpperPalate";
import { GeometryProps } from "../../../../types/three";

function SnakeScull(props: GeometryProps) {
  return (
    <group {...props}>
      <SnakeHeadBack />
      <SnakeForehead />
      <SnakeNoseBridge />
      <SnakeNose />
      <SnakeNoseTip />
      <SnakeUpperLip />
      <SnakeCheeks />
      <SnakeEyelids />
      <SnakeNostrils />
      <SnakeUpperPalate />
    </group>
  );
}

export default SnakeScull;
