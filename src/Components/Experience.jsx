import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import Level from './Level.jsx'
import { Physics } from '@react-three/rapier'
import { Suspense } from 'react'
export default function Experience() {
    return <>

        <OrbitControls makeDefault />
        <Suspense>

        <Physics debug>
            <Lights />
            <Level />
        </Physics>
        </Suspense>
     
    </>
}