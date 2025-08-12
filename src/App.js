import Experience from "./Components/Experience";
import { Canvas } from "react-three-fiber";
import { KeyboardControls } from "@react-three/drei";
import Interface from "./Components/Interface/Interface";
import { KeyMaps } from "./Utils/KeyMaps";
import './styles.scss';

function App() {
  return (
    <KeyboardControls map={KeyMaps}>
   <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 1.5, -10]
        } }
    >
      <color attach="background" args={['#5ccaf0']} />
        <Experience />
    </Canvas>  
    <Interface/>
    </KeyboardControls>
  )
}

export default App;
