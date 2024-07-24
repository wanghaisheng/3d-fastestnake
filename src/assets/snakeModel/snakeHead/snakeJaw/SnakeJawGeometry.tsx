import * as VERT from "./snakeJawVertices";

function SnakeJawGeometry() {
  const jawFaceABH = VERT.verticesA.concat(VERT.verticesH, VERT.verticesB);
  const jawFaceAHE = VERT.verticesA.concat(VERT.verticesE, VERT.verticesH);
  const jawFaceACF = VERT.verticesA.concat(VERT.verticesC, VERT.verticesF);
  const jawFaceAFE = VERT.verticesA.concat(VERT.verticesF, VERT.verticesE);
  const jawFaceABD = VERT.verticesA.concat(VERT.verticesB, VERT.verticesD);
  const jawFaceADC = VERT.verticesA.concat(VERT.verticesD, VERT.verticesC);
  const jawFaceBDG = VERT.verticesB.concat(VERT.verticesG, VERT.verticesD);
  const jawFaceBGH = VERT.verticesB.concat(VERT.verticesH, VERT.verticesG);
  const jawFaceCDG = VERT.verticesC.concat(VERT.verticesD, VERT.verticesG);
  const jawFaceCGF = VERT.verticesC.concat(VERT.verticesG, VERT.verticesF);
  const jawFaceGEH = VERT.verticesG.concat(VERT.verticesH, VERT.verticesE);
  const jawFaceGEF = VERT.verticesG.concat(VERT.verticesE, VERT.verticesF);
  const allJawFaces = jawFaceGEF.concat(
    jawFaceABH,
    jawFaceAHE,
    jawFaceACF,
    jawFaceAFE,
    jawFaceABD,
    jawFaceADC,
    jawFaceBDG,
    jawFaceBGH,
    jawFaceCDG,
    jawFaceCGF,
    jawFaceGEH
  );
  const jawVertices = new Float32Array(allJawFaces);
  return (
    <bufferGeometry onUpdate={(self) => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        count={jawVertices.length / 3}
        array={jawVertices}
        itemSize={3}
      />
    </bufferGeometry>
  );
}

export default SnakeJawGeometry;
