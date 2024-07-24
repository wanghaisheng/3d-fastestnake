import { getSnakeOpacity } from "../../../../../Components/Snake/setSnakeOpacity";
import SnakeHeadBackGeometry from "./SnakeHeadBackGeometry";

function SnakeHeadBack() {
  return (
    <mesh>
      <SnakeHeadBackGeometry />
      <meshStandardMaterial
        color={0x44abda}
        opacity={getSnakeOpacity()}
        transparent
      />
    </mesh>
  );
}

export default SnakeHeadBack;
