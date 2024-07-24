import * as VERT from "../snakeScullVertices";

function SnakeUpperPalateGeometry() {
  const upperPalateFaceQZR = VERT.verticesQ.concat(
    VERT.verticesZ,
    VERT.verticesR
  );
  const upperPalateFaceRZY = VERT.verticesR.concat(
    VERT.verticesZ,
    VERT.verticesY
  );
  const upperPalateFaceRYS = VERT.verticesR.concat(
    VERT.verticesY,
    VERT.verticesS
  );
  const upperPalateFaceSYX = VERT.verticesS.concat(
    VERT.verticesY,
    VERT.verticesX
  );
  const upperPalateFaceSXT = VERT.verticesS.concat(
    VERT.verticesX,
    VERT.verticesT
  );
  const upperPalateFaceTXW = VERT.verticesT.concat(
    VERT.verticesX,
    VERT.verticesW
  );
  const upperPalateFaceTWU = VERT.verticesT.concat(
    VERT.verticesW,
    VERT.verticesU
  );
  const upperPalateFaceUWV = VERT.verticesU.concat(
    VERT.verticesW,
    VERT.verticesV
  );
  const allUpperPalateFaces = upperPalateFaceQZR.concat(
    upperPalateFaceRZY,
    upperPalateFaceRYS,
    upperPalateFaceSYX,
    upperPalateFaceSXT,
    upperPalateFaceTXW,
    upperPalateFaceTWU,
    upperPalateFaceUWV
  );
  const upperPalatesVertices = new Float32Array(allUpperPalateFaces);
  return (
    <bufferGeometry onUpdate={(self) => self.computeVertexNormals()}>
      <bufferAttribute
        attach="attributes-position"
        count={upperPalatesVertices.length / 3}
        array={upperPalatesVertices}
        itemSize={3}
      />
    </bufferGeometry>
  );
}

export default SnakeUpperPalateGeometry;
