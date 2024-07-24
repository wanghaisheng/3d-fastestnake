import * as VERT from "../snakeScullVertices";

function SnakeHeadBackGeometry() {
  const headBackFaceABZ = VERT.verticesA.concat(VERT.verticesB, VERT.verticesZ);
  const headBackFaceQAZ = VERT.verticesQ.concat(VERT.verticesA, VERT.verticesZ);
  const allHeadBackFaces = headBackFaceABZ.concat(headBackFaceQAZ);
  const headBackVertices = new Float32Array(allHeadBackFaces);
  return (
    <bufferGeometry onUpdate={(self) => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        count={headBackVertices.length / 3}
        array={headBackVertices}
        itemSize={3}
      />
    </bufferGeometry>
  );
}

export default SnakeHeadBackGeometry;
