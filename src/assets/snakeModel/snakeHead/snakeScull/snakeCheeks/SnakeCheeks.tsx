import { getSnakeOpacity } from "../../../../../Components/Snake/setSnakeOpacity";
import SnakeCheeksGeometry from "./SnakeCheeksGeometry";

function SnakeCheeks() {
  return (
    <mesh>
      <SnakeCheeksGeometry />
      <meshStandardMaterial
        color={0x44abda}
        opacity={getSnakeOpacity()}
        transparent
      />
    </mesh>
  );
}

export default SnakeCheeks;
