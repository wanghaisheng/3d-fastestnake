import { getSnakeOpacity } from "../../../../../Components/Snake/setSnakeOpacity";
import SnakeNoseTipGeometry from "./SnakeNoseTipGeometry";

function SnakeNoseTip() {
  return (
    <mesh>
      <SnakeNoseTipGeometry />
      <meshStandardMaterial
        color={0x44abda}
        opacity={getSnakeOpacity()}
        transparent
      />
    </mesh>
  );
}

export default SnakeNoseTip;
