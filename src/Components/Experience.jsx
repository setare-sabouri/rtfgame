import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import Level from './Level.jsx'
import { Physics } from '@react-three/rapier'
import { Suspense } from 'react'
import SpinnerBlock from './Blocks/SpinnerBlock'
import LimboBlock from './Blocks/LimboBlock'
import AxeBlock from './Blocks/AxeBlock';
import Player from './Player/Player.jsx'
export default function Experience() {
    return <>

        <OrbitControls makeDefault />

        <Suspense>
        <Physics debug>
            <Lights />
            <Level count={10} types={[SpinnerBlock,LimboBlock,AxeBlock]}/>
            <Player/>
        </Physics> 
        </Suspense>
     
    </>
}