import * as VERT from "../snakeScullVertices";

function SnakeNoseTipGeometry() {
  const noseTipFaceKLN = VERT.verticesL.concat(VERT.verticesK, VERT.verticesN);
  const noseTipFaceKMN = VERT.verticesN.concat(VERT.verticesK, VERT.verticesM);
  const allNoseTipFaces = noseTipFaceKLN.concat(noseTipFaceKMN);
  const noseTipVertices = new Float32Array(allNoseTipFaces);
  return (
    <bufferGeometry onUpdate={(self) => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        count={noseTipVertices.length / 3}
        array={noseTipVertices}
        itemSize={3}
      />
    </bufferGeometry>
  );
}

export default SnakeNoseTipGeometry;
