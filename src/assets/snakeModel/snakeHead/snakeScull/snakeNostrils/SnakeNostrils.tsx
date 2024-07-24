import { getSnakeOpacity } from "../../../../../Components/Snake/setSnakeOpacity";
import SnakeNostrilsGeometry from "./SnakeNostrilsGeometry";

function SnakeNostrils() {
  return (
    <mesh>
      <SnakeNostrilsGeometry />
      <meshStandardMaterial
        color={0xfedc32}
        opacity={getSnakeOpacity()}
        transparent
      />
    </mesh>
  );
}

export default SnakeNostrils;
