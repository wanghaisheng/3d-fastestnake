import { getSnakeOpacity } from "../../../../../Components/Snake/setSnakeOpacity";
import SnakeUpperPalateGeometry from "./SnakeUpperPalateGeometry";

function SnakeUpperPalate() {
  return (
    <mesh>
      <SnakeUpperPalateGeometry />
      <meshStandardMaterial
        color={"red"}
        opacity={getSnakeOpacity()}
        transparent
      />
    </mesh>
  );
}

export default SnakeUpperPalate;
