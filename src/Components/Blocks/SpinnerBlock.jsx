import React from 'react'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useRef } from 'react'
const boxGeometry = new THREE.BoxGeometry(1,1,1) 
const floor1kMaterial = new THREE.MeshStandardMaterial({color: 'limegreen'})
const floor2kMaterial = new THREE.MeshStandardMaterial({color: 'greenyellow'})
const obstacleMaterial = new THREE.MeshStandardMaterial({color: 'orangered'})
const wallkMaterial = new THREE.MeshStandardMaterial({color: 'slategray'}) 

const StartBlock = ({position=[0,0,0]}) => {
    const obstacle = useRef()
  return (
      <group position={position}> 
          <mesh geometry={boxGeometry} material={floor2kMaterial} scale={[4,0.2,4]} receiveShadow/>
          <RigidBody ref={obstacle} type='kinematicPosition' position={[0,0.3,0]} restitution={0.5} friction={0}>
              <mesh geometry={boxGeometry} material={obstacleMaterial} position={[0,0.1,0]} scale={[3.5,0.3,0.3]} castShadow receiveShadow/>
          </RigidBody>
      </group>
    
  )
}

export default StartBlock
