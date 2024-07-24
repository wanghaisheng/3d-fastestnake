import * as VERT from "../snakeScullVertices";

function SnakeNostrilsGeometry() {
  const nostrilsFaceKMO = VERT.verticesK.concat(VERT.verticesO, VERT.verticesM);
  const nostrilsFaceLNP = VERT.verticesL.concat(VERT.verticesN, VERT.verticesP);
  const allNostrilsFaces = nostrilsFaceKMO.concat(nostrilsFaceLNP);
  const nostrilsVertices = new Float32Array(allNostrilsFaces);
  return (
    <bufferGeometry onUpdate={(self) => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        count={nostrilsVertices.length / 3}
        array={nostrilsVertices}
        itemSize={3}
      />
    </bufferGeometry>
  );
}

export default SnakeNostrilsGeometry;
