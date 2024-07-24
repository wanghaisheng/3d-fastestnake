import { Vector3 } from "three";
import snakeHeadTransform from "./snakeHeadTransform";
import { GeometryProps } from "../../../types/three";

function setSnakeHeadProps(): GeometryProps {
  const [headPos, headRot, headScl] = snakeHeadTransform();
  const props: GeometryProps = {
    position: new Vector3(headPos[0], headPos[1], headPos[2]),
    "rotation-x": headRot[0],
    "rotation-y": headRot[1],
    "rotation-z": headRot[2],
    scale: headScl[0],
  };
  return props;
}

export default setSnakeHeadProps;
