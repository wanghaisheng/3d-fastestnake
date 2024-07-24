import * as VERT from "../snakeScullVertices";

function SnakeForeheadGeometry() {
  const foreheadFaceABC = VERT.verticesA.concat(VERT.verticesC, VERT.verticesB);
  const foreheadFaceBCD = VERT.verticesB.concat(VERT.verticesC, VERT.verticesD);
  const allForeheadFaces = foreheadFaceABC.concat(foreheadFaceBCD);
  const foreheadVertices = new Float32Array(allForeheadFaces);
  return (
    <bufferGeometry onUpdate={(self) => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        count={foreheadVertices.length / 3}
        array={foreheadVertices}
        itemSize={3}
      />
    </bufferGeometry>
  );
}

export default SnakeForeheadGeometry;
