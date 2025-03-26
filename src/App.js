import Experience from "./Components/Experience";
import { Canvas } from "react-three-fiber";
import { KeyboardControls } from "@react-three/drei";
import './styles.scss';
function App() {
    
    const KeyMaps=[
        {name: "forward" , keys: ["KeyW","ArrowUp"]},
        {name: "backward" , keys: ["KeyS","ArrowDown"]},
        {name: "left" , keys: ["KeyA","ArrowLeft"]},
        {name: "right" , keys: ["KeyD","ArrowRight"]},
        {name: "jump" , keys: ["Space"]},
    ]

  return (
    <KeyboardControls map={KeyMaps}>
   <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 1,5, -10]
        } }
    >
        <Experience />
    </Canvas>  
    </KeyboardControls>
  )
}

export default App;
