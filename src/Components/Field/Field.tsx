import { FieldsProps } from "../../types/field";

const Fields: React.FC<FieldsProps> = ({ size }) => {
  return (
    <group>
      <mesh position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[size * 20, size * 20]} />
        <meshStandardMaterial color="#56f854" />
      </mesh>
      <gridHelper
        args={[size, size, 0xffffff, 0xffffff]}
        rotation-x={Math.PI / 2}
        position={[0, 0, 0.1]}
      />
      {/* )} */}
    </group>
  );
};

export default Fields;
