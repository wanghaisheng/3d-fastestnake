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
          camera={{
            fov: 30,
            aspect: window.innerWidth / window.innerHeight,
            far: 1000,
            near: 0.1,
            rotation: [0.8, 0, 0],
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
