import { RigidBody } from '@react-three/rapier'
import React from 'react'
import * as THREE from 'three'
const wallkMaterial = new THREE.MeshStandardMaterial({color: 'slategray'}) 
const boxGeometry = new THREE.BoxGeometry(1,1,1) 

const Walls = ({length=1,position=([0,0,0]),scale=([0.3,1.5,length*4])}) => {
  
  return (
   <>
<RigidBody type='fixed' restitution={0.2} friction={0}>
<mesh    
   material={wallkMaterial}
   geometry={boxGeometry} 
   position={position} 
   scale={scale}
   castShadow 
   receiveShadow
   />
</RigidBody>

   </>
  )
}

export default Walls
