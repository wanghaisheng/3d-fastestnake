import * as VERT from "./snakeTongueVertices";

function SnakeTongueGeometry() {
  const tongueFaceABD = VERT.verticesA.concat(VERT.verticesB, VERT.verticesD);
  const tongueFaceADC = VERT.verticesA.concat(VERT.verticesD, VERT.verticesC);
  const tongueFaceAEH = VERT.verticesA.concat(VERT.verticesH, VERT.verticesE);
  const tongueFaceAHC = VERT.verticesA.concat(VERT.verticesH, VERT.verticesC);
  const tongueFaceAFE = VERT.verticesA.concat(VERT.verticesE, VERT.verticesF);
  const tongueFaceAFB = VERT.verticesA.concat(VERT.verticesF, VERT.verticesB);
  const tongueFaceGBD = VERT.verticesG.concat(VERT.verticesB, VERT.verticesD);
  const tongueFaceGDJ = VERT.verticesG.concat(VERT.verticesD, VERT.verticesJ);
  const tongueFaceGFB = VERT.verticesG.concat(VERT.verticesF, VERT.verticesB);
  const tongueFaceGFI = VERT.verticesG.concat(VERT.verticesF, VERT.verticesI);
  const tongueFaceGIJ = VERT.verticesG.concat(VERT.verticesI, VERT.verticesJ);
  const tongueFaceHEF = VERT.verticesH.concat(VERT.verticesE, VERT.verticesF);
  const tongueFaceHFI = VERT.verticesH.concat(VERT.verticesF, VERT.verticesI);
  const tongueFaceHCI = VERT.verticesH.concat(VERT.verticesC, VERT.verticesI);
  const tongueFaceICD = VERT.verticesI.concat(VERT.verticesC, VERT.verticesD);
  const tongueFaceIJD = VERT.verticesD.concat(VERT.verticesI, VERT.verticesJ);
  const allTongueFaces = tongueFaceABD.concat(
    tongueFaceADC,
    tongueFaceAEH,
    tongueFaceAHC,
    tongueFaceAFE,
    tongueFaceAFB,
    tongueFaceGBD,
    tongueFaceGDJ,
    tongueFaceGFB,
    tongueFaceGFI,
    tongueFaceGIJ,
    tongueFaceHEF,
    tongueFaceHFI,
    tongueFaceHCI,
    tongueFaceICD,
    tongueFaceIJD
  );
  const tongueVertices = new Float32Array(allTongueFaces);
  return (
    <bufferGeometry onUpdate={(self) => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        count={tongueVertices.length / 3}
        array={tongueVertices}
        itemSize={3}
      />
    </bufferGeometry>
  );
}

export default SnakeTongueGeometry;
