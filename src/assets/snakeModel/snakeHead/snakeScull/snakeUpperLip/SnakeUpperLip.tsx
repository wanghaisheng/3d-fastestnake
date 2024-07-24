import { getSnakeOpacity } from "../../../../../Components/Snake/setSnakeOpacity";
import SnakeUpperLipGeometry from "./SnakeUpperLipGeometry";

function SnakeUpperLip() {
  return (
    <mesh>
      <SnakeUpperLipGeometry />
      <meshStandardMaterial
        color={0x44abda}
        opacity={getSnakeOpacity()}
        transparent
      />
    </mesh>
  );
}

export default SnakeUpperLip;
