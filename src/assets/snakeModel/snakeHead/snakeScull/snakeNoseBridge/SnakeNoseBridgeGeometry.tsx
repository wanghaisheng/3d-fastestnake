import * as VERT from "../snakeScullVertices";

function SnakeNoseBridgeGeometry() {
  const noseBridgeFaceEFI = VERT.verticesF.concat(
    VERT.verticesE,
    VERT.verticesI
  );
  const noseBridgeFaceHEI = VERT.verticesH.concat(
    VERT.verticesI,
    VERT.verticesE
  );
  const allNoseBridgeFaces = noseBridgeFaceEFI.concat(noseBridgeFaceHEI);
  const noseBridgeVertices = new Float32Array(allNoseBridgeFaces);
  return (
    <bufferGeometry onUpdate={(self) => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        count={noseBridgeVertices.length / 3}
        array={noseBridgeVertices}
        itemSize={3}
      />
    </bufferGeometry>
  );
}

export default SnakeNoseBridgeGeometry;
