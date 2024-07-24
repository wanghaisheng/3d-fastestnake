import * as VERT from "./snakeTailVertices";

function SnakeTailGeometry() {
  const tailFaceABD = VERT.verticesA.concat(VERT.verticesB, VERT.verticesD);
  const tailFaceADC = VERT.verticesA.concat(VERT.verticesD, VERT.verticesC);
  const tailFaceAFE = VERT.verticesA.concat(VERT.verticesE, VERT.verticesF);
  const tailFaceAFB = VERT.verticesA.concat(VERT.verticesF, VERT.verticesB);
  const tailFaceACG = VERT.verticesA.concat(VERT.verticesC, VERT.verticesG);
  const tailFaceAGE = VERT.verticesA.concat(VERT.verticesG, VERT.verticesE);
  const tailFaceHBD = VERT.verticesH.concat(VERT.verticesB, VERT.verticesD);
  const tailFaceHDC = VERT.verticesH.concat(VERT.verticesD, VERT.verticesC);
  const tailFaceHFE = VERT.verticesH.concat(VERT.verticesE, VERT.verticesF);
  const tailFaceHFB = VERT.verticesH.concat(VERT.verticesF, VERT.verticesB);
  const tailFaceHCG = VERT.verticesH.concat(VERT.verticesC, VERT.verticesG);
  const tailFaceHGE = VERT.verticesH.concat(VERT.verticesG, VERT.verticesE);
  const allTailFaces = tailFaceABD.concat(
    tailFaceADC,
    tailFaceAFE,
    tailFaceAFB,
    tailFaceACG,
    tailFaceAGE,
    tailFaceHDC,
    tailFaceHFE,
    tailFaceHFB,
    tailFaceHCG,
    tailFaceHGE,
    tailFaceHBD
  );
  const tailVertices = new Float32Array(allTailFaces);
  return (
    <bufferGeometry onUpdate={(self) => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        count={tailVertices.length / 3}
        array={tailVertices}
        itemSize={3}
      />
    </bufferGeometry>
  );
}

export default SnakeTailGeometry;
