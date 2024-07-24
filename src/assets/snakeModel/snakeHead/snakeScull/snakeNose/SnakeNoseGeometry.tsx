import * as VERT from "../snakeScullVertices";

function SnakeNoseGeometry() {
  const noseFaceHIL = VERT.verticesI.concat(VERT.verticesH, VERT.verticesL);
  const noseFaceKHL = VERT.verticesH.concat(VERT.verticesK, VERT.verticesL);
  const allNoseFaces = noseFaceHIL.concat(noseFaceKHL);
  const noseVertices = new Float32Array(allNoseFaces);
  return (
    <bufferGeometry onUpdate={(self) => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        count={noseVertices.length / 3}
        array={noseVertices}
        itemSize={3}
      />
    </bufferGeometry>
  );
}

export default SnakeNoseGeometry;
