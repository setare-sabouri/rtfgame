import { useRef } from "react"
import { useFrame } from "react-three-fiber"
export default function Lights()
{

    const DirLightRef=useRef()

    useFrame((state)=>{
        DirLightRef.current.position.z=state.camera.position.z + 3
        DirLightRef.current.target.position.z=state.camera.position.z +3
        DirLightRef.current.target.updateMatrixWorld()

    })


    return <>
        <directionalLight
            ref={DirLightRef}
            castShadow
            position={ [ -4, 4, 1 ] }
            intensity={ 1.5 }
            shadow-mapSize={ [ 1024, 1024 ] }
            shadow-camera-near={ 1 }
            shadow-camera-far={ 10 }
            shadow-camera-top={ 10 }
            shadow-camera-right={ 10 }
            shadow-camera-bottom={ - 10 }
            shadow-camera-left={ - 10 }
        />
        <ambientLight intensity={ 1 } />
    </>
}