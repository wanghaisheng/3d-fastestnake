import { Canvas } from "@react-three/fiber";
import Wrapper from "./Components/Wrapper/Wrapper";
import Game from "./Components/Game/Game";
import { useMenuStore } from "./store/menuStore";
import Menu from "./Components/Menu/Menu";

function App() {
  const { isVisible } = useMenuStore();

  return (
    <>
      <Wrapper>
        <Canvas
          // orthographic
          camera={{
            fov: 30,
            aspect: window.innerWidth / window.innerHeight,
            // left: -100,
            // right: 100,
            // top: 100,
            // bottom: -100,
            far: 1000,
            near: 0.1,
            rotation: [0.8, 0, 0],
            // position: [0, 0, 0],
            // zoom: 0.2,
          }}
        >
          <Game />
        </Canvas>
        {isVisible && <Menu />}
      </Wrapper>
    </>
  );
}

export default App;
