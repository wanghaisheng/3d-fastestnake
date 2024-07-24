import { getSnakeOpacity } from "../../../../../Components/Snake/setSnakeOpacity";
import SnakeNoseGeometry from "./SnakeNoseGeometry";

function SnakeNose() {
  return (
    <mesh>
      <SnakeNoseGeometry />
      <meshStandardMaterial
        color={0x44abda}
        opacity={getSnakeOpacity()}
        transparent
      />
    </mesh>
  );
}

export default SnakeNose;
