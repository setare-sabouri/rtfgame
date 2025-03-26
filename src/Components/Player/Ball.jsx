import { RigidBody } from '@react-three/rapier'
import React from 'react'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'
import { useRef } from 'react'


const Ball = () => {
    const [subscribeKeys,getKeys] = useKeyboardControls()
    const ballRef = useRef()
    
    useFrame(()=>{
        const {forward,backward,left,right} = getKeys()
        ballRef.current.applyImpulse({x:0, y:0,z:0})
    })
  return (
   <>
    <RigidBody ref={ballRef} canSleep={false} colliders="ball" position={[0,1,0]} restitution={0.2} friction={1}>
        <mesh castShadow>
            <icosahedronGeometry args={[0.3,1]}/>
            <meshStandardMaterial flatShading color="mediumpurple"/>
        </mesh>
    </RigidBody>

   </>
  )
}

export default Ball
