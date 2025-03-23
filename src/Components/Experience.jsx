import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import Level from './Level.jsx'
import { Physics } from '@react-three/rapier'
import { Suspense } from 'react'
import SpinnerBlock from './Blocks/SpinnerBlock'
export default function Experience() {
    return <>

        <OrbitControls makeDefault />
        <Suspense>

        <Physics debug>
            <Lights />
            <Level count={10} types={[SpinnerBlock]}/>
        </Physics> 
        </Suspense>
     
    </>
}