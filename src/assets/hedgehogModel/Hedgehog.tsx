import { Vector2 } from "three";
import { hedgehogProps } from "../../types/obstacle";

function Hedgehog(props: hedgehogProps) {
  const { direction, index, line } = props;
  const frontPoints = [];
  for (let i = 0; i < 10; i++) {
    frontPoints.push(
      new Vector2((Math.sin(i * 0.2) * 8 + 8) / 25, (i + 6) / 15)
    );
  }
  const backPoints = [];
  for (let i = 0; i < 10; i++) {
    backPoints.push(
      new Vector2((Math.sin(i * 0.2) * 8 + 8) / 25, (i * 0.9 - 21) / 15)
    );
  }

  return (
    <group>
      <mesh
        rotation={[
          0,
          0,
          line === "Y"
            ? direction[index] * -1.57
            : ((direction[index] - 1) / 2) * 3.14,
        ]}
      >
        <coneGeometry args={[0.4, 1, 15, 1, false, 4.7, 3.14]} />
        <meshStandardMaterial color={"#A18E74"} />
      </mesh>
      <mesh
        rotation={[
          0,
          0,
          line === "X"
            ? direction[index] * 1.57 + 1.57
            : direction[index] * 1.57,
        ]}
      >
        <latheGeometry args={[frontPoints]} />
        <meshStandardMaterial color={"#5B586A"} />
      </mesh>
      <mesh
        rotation={[
          0,
          0,
          line === "X"
            ? direction[index] * 1.57 - 1.57
            : direction[index] * -1.57,
        ]}
      >
        <latheGeometry args={[backPoints]} />
        <meshStandardMaterial color={"#5B586A"} />
      </mesh>
      <mesh
        position={[
          line === "X" ? 0 : -1 * direction[index],
          line === "X" ? -1 * direction[index] : 0,
          0,
        ]}
      >
        <sphereGeometry args={[0.52, 5]} />
        <meshStandardMaterial color={"#5B586A"} />
      </mesh>
      <mesh position={[line === "Y" ? direction[index] * 0.1 : 0, 0, 0.2]}>
        <sphereGeometry args={[0.1, 5]} />
        <meshStandardMaterial color={"#5B586A"} />
      </mesh>
      <mesh
        position={
          line === "X"
            ? [direction[index] * 0.2, direction[index] * -0.3, 0.2]
            : [direction[index] * -0.3, -0.2, 0.2]
        }
      >
        <sphereGeometry args={[0.1, 5]} />
        <meshStandardMaterial color={"#5B586A"} />
      </mesh>
      <mesh
        position={
          line === "X"
            ? [direction[index] * -0.2, direction[index] * -0.3, 0.2]
            : [direction[index] * -0.3, 0.2, 0.2]
        }
      >
        <sphereGeometry args={[0.1, 5]} />
        <meshStandardMaterial color={"#5B586A"} />
      </mesh>
    </group>
  );
}

export default Hedgehog;
