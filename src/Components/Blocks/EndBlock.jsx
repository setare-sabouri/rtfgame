import React from 'react'
import * as THREE from 'three'
import Hamburgare from '../Hamburgare'

const boxGeometry = new THREE.BoxGeometry(1,1,1) 
const floor1kMaterial = new THREE.MeshStandardMaterial({color: 'limegreen'})

const EndBlock = ({position=[0,0,0]}) => {
  return (

      <group position={position}> 
      <Hamburgare/>
          <mesh geometry={boxGeometry} material={floor1kMaterial} scale={[4,0.2,4]} receiveShadow/> 
      </group>
    
  )
}

export default EndBlock
