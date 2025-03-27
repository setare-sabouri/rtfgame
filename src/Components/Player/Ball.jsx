import { RigidBody } from '@react-three/rapier'
import React from 'react'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'
import { useRef } from 'react'


const Ball = () => {
    const [subscribeKeys,getKeys] = useKeyboardControls()
    const ballRef = useRef()
    
    useFrame((state,delta)=>{
        const {forward,backward,left,right} = getKeys()

        const Impulse={x:0, y:0,z:0}
        const Torque={x:0, y:0,z:0}

        const speed=delta* 0.5

        if(forward){
            Impulse.z += speed
            Torque.x += speed
        }
        if(backward){
            Impulse.z -= speed
            Torque.x -= speed
        }
        if(right){
            Impulse.x +=speed
            Torque.z += speed
        }

        if(left){
            Impulse.x -=speed
            Torque.z -= speed
        }

        ballRef.current.applyImpulse(Impulse)
        ballRef.current.applyTorqueImpulse(Torque)
    })
  return (
   <>
    <RigidBody ref={ballRef} canSleep={false} colliders="ball" position={[0,1,0]} restitution={0.2} friction={1} linearDamping={0.5} angularDamping={0.5}>
        <mesh castShadow>
            <icosahedronGeometry args={[0.3,1]}/>
            <meshStandardMaterial flatShading color="mediumpurple"/>
        </mesh>
    </RigidBody>

   </>
  )
}

export default Ball
