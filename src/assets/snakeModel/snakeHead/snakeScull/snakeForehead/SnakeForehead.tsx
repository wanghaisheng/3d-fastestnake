import { getSnakeOpacity } from "../../../../../Components/Snake/setSnakeOpacity";
import SnakeForeheadGeometry from "./SnakeForeheadGeometry";

function SnakeForehead() {
  return (
    <mesh>
      <SnakeForeheadGeometry />
      <meshStandardMaterial
        color={0x44abda}
        opacity={getSnakeOpacity()}
        transparent
      />
    </mesh>
  );
}

export default SnakeForehead;
