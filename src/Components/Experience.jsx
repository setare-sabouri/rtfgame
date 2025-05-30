import { OrbitControls } from '@react-three/drei'
import Lights from './Lights.jsx'
import Level from './Level.jsx'
import { Physics } from '@react-three/rapier'
import { Suspense } from 'react'
import SpinnerBlock from './Blocks/SpinnerBlock'
import LimboBlock from './Blocks/LimboBlock'
import AxeBlock from './Blocks/AxeBlock';
import Player from './Player/Player.jsx'
import useGame from '../Stores/useGame.js'

export default function Experience() {
    const blockCount = useGame((state)=>state.blockCount)
    const blockSeed = useGame((state)=>state.blockSeed)
    return <>

        <OrbitControls makeDefault />
        <Suspense>
        {/* <Physics debug> */}
        <Physics >
            
            <Lights />
            <Level count={blockCount} blockSeed={blockSeed} types={[SpinnerBlock,LimboBlock,AxeBlock]} />
            <Player/>
        </Physics> 
        </Suspense>
     
    </>
}