import { Vector3 } from "three";
import snakeBodyTransform from "./snakeBodyTransform";
import { GeometryProps } from "../../../types/three";

function setSnakeBodyProps(index: number): GeometryProps[] {
  const [bodyPos, bodyRot, bodyScl] = snakeBodyTransform(index);
  const propsRight: GeometryProps = {
    position: new Vector3(bodyPos.right[0], bodyPos.right[1], bodyPos.right[2]),
    "rotation-x": bodyRot.right[0],
    "rotation-y": bodyRot.right[1],
    "rotation-z": bodyRot.right[2],
    scale: bodyScl.right[0],
  };
  const propsLeft: GeometryProps = {
    position: new Vector3(bodyPos.left[0], bodyPos.left[1], bodyPos.left[2]),
    "rotation-x": bodyRot.left[0],
    "rotation-y": bodyRot.left[1],
    "rotation-z": bodyRot.left[2],
    scale: bodyScl.left[0],
  };
  return [propsRight, propsLeft];
}

export default setSnakeBodyProps;
