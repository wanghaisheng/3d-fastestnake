import { getSnakeOpacity } from "../../../../../Components/Snake/setSnakeOpacity";
import SnakeEyelidsGeometry from "./SnakeEyelidsGeometry";

function SnakeEyelids() {
  return (
    <mesh>
      <SnakeEyelidsGeometry />
      <meshStandardMaterial
        color={0xfedc32}
        opacity={getSnakeOpacity()}
        transparent
      />
    </mesh>
  );
}

export default SnakeEyelids;
