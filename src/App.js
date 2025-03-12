import Experience from "./Components/Experience";
import { Canvas } from "react-three-fiber";
import './styles.scss';
function App() {
  return (
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 2.5, 4, 6 ]
        } }
    >
        <Experience />
    </Canvas>  );
}

export default App;
