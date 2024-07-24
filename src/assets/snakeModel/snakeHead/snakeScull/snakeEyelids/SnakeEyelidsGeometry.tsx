import * as VERT from "../snakeScullVertices";

function SnakeEyelidsGeometry() {
  const eyelidsFaceCEG = VERT.verticesC.concat(VERT.verticesG, VERT.verticesE);
  const eyelidsFaceGEH = VERT.verticesG.concat(VERT.verticesH, VERT.verticesE);
  const eyelidsFaceFDJ = VERT.verticesF.concat(VERT.verticesJ, VERT.verticesD);
  const eyelidsFaceFJI = VERT.verticesF.concat(VERT.verticesI, VERT.verticesJ);
  const allEyelidsFaces = eyelidsFaceCEG.concat(
    eyelidsFaceGEH,
    eyelidsFaceFDJ,
    eyelidsFaceFJI
  );
  const eyelidsVertices = new Float32Array(allEyelidsFaces);
  return (
    <bufferGeometry onUpdate={(self) => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        count={eyelidsVertices.length / 3}
        array={eyelidsVertices}
        itemSize={3}
      />
    </bufferGeometry>
  );
}

export default SnakeEyelidsGeometry;
