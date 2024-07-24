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
          orthographic
          camera={{
            left: -100,
            right: 100,
            top: 100,
            bottom: -100,
            far: 100,
            near: -100,
            rotation: [0.7, 0, 0],
            position: [0, 0, 1],
            zoom: 20,
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
