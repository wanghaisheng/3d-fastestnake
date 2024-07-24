import * as VERT from "./snakeBodyVertices";

function SnakeBodyGeometry() {
  const faceABC = VERT.verticesA.concat(VERT.verticesC, VERT.verticesB);
  const faceDEF = VERT.verticesD.concat(VERT.verticesE, VERT.verticesF);
  const faceADF = VERT.verticesA.concat(VERT.verticesD, VERT.verticesF);
  const faceACF = VERT.verticesA.concat(VERT.verticesF, VERT.verticesC);
  const faceCBE = VERT.verticesC.concat(VERT.verticesE, VERT.verticesB);
  const faceCFE = VERT.verticesC.concat(VERT.verticesF, VERT.verticesE);
  const faceABD = VERT.verticesA.concat(VERT.verticesB, VERT.verticesD);
  const faceEBD = VERT.verticesE.concat(VERT.verticesD, VERT.verticesB);
  const allFaces = faceABC.concat(
    faceDEF,
    faceADF,
    faceACF,
    faceCBE,
    faceCFE,
    faceABD,
    faceEBD
  );
  const vertices = new Float32Array(allFaces);
  return (
    <bufferGeometry onUpdate={(self) => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        count={vertices.length / 3}
        array={vertices}
        itemSize={3}
      />
    </bufferGeometry>
  );
}

export default SnakeBodyGeometry;
