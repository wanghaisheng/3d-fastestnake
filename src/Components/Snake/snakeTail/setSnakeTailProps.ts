import { Vector3 } from "three";
import snakeTailTransform from "./snakeTailTransform";
import { GeometryProps } from "../../../types/three";

function setSnakeTailProps(index: number): GeometryProps {
  const [tailPos, tailRot, tailScl] = snakeTailTransform(index);
  const props: GeometryProps = {
    position: new Vector3(tailPos[0], tailPos[1], tailPos[2]),
    "rotation-x": tailRot[0],
    "rotation-y": tailRot[1],
    "rotation-z": tailRot[2],
    scale: tailScl[0],
  };
  return props;
}

export default setSnakeTailProps;
