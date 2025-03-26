import React from 'react'
import * as THREE from 'three'
const boxGeometry = new THREE.BoxGeometry(1,1,1) 
const floor1kMaterial = new THREE.MeshStandardMaterial({color: 'limegreen'})
const floor2kMaterial = new THREE.MeshStandardMaterial({color: 'greenyellow'})
const obstacleMaterial = new THREE.MeshStandardMaterial({color: 'orangered'})
const StartBlock = ({position=[0,0,0]}) => {
  return (

      <group position={position}> 
          <mesh geometry={boxGeometry} material={floor1kMaterial} scale={[4,0.2,4]} receiveShadow/> 
      </group>
    
  )
}

export default StartBlock
