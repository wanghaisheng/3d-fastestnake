import * as VERT from "../snakeScullVertices";

function SnakeUpperLipGeometry() {
  const upperLipFaceMNO = VERT.verticesM.concat(VERT.verticesO, VERT.verticesN);
  const upperLipFaceONP = VERT.verticesO.concat(VERT.verticesP, VERT.verticesN);
  const upperLipFaceOPU = VERT.verticesO.concat(VERT.verticesU, VERT.verticesP);
  const upperLipFaceUPV = VERT.verticesU.concat(VERT.verticesV, VERT.verticesP);
  const allUpperLipFaces = upperLipFaceOPU.concat(
    upperLipFaceMNO,
    upperLipFaceONP,
    upperLipFaceUPV
  );
  const upperLipVertices = new Float32Array(allUpperLipFaces);
  return (
    <bufferGeometry onUpdate={(self) => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        count={upperLipVertices.length / 3}
        array={upperLipVertices}
        itemSize={3}
      />
    </bufferGeometry>
  );
}

export default SnakeUpperLipGeometry;
