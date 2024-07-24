import { getSnakeOpacity } from "../../../../../Components/Snake/setSnakeOpacity";
import SnakeNoseBridgeGeometry from "./SnakeNoseBridgeGeometry";

function SnakeNoseBridge() {
  return (
    <mesh>
      <SnakeNoseBridgeGeometry />
      <meshStandardMaterial
        color={0x44abda}
        opacity={getSnakeOpacity()}
        transparent
      />
    </mesh>
  );
}

export default SnakeNoseBridge;
