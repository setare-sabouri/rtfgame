import { CuboidCollider, RigidBody } from '@react-three/rapier'
import React from 'react'

const FloorCollider = ({length}) => {
  return (
   <>
   <RigidBody type='fixed' restitution={0.2} friction={0}> 
    <CuboidCollider 
    args={[2,0.1,(length*2)+4]} 
    position={[0,-0.1,(length*2)+2]}
    restitution={0.2}
    friction={1}
    />
   </RigidBody>
   </>
  )
}

export default FloorCollider
