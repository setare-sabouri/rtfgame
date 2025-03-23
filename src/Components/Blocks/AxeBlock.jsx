import React from 'react'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useRef,useState} from 'react'
import { useFrame } from 'react-three-fiber'

const boxGeometry = new THREE.BoxGeometry(1,1,1) 
const floor2kMaterial = new THREE.MeshStandardMaterial({color: 'greenyellow'})
const obstacleMaterial = new THREE.MeshStandardMaterial({color: 'orangered'})

const AxeBlock = ({position=[0,0,0]}) => {
    
 const obstacle = useRef()
    const [speed] = useState(()=>(Math.random()*Math.PI*2))

    useFrame((state) => {
      const time = state.clock.getElapsedTime()
      const xMove=Math.sin(time*speed) *1.25
      obstacle.current.setNextKinematicTranslation({x:position[0]+xMove , y:position[1]+0.75, z:position[2]})
    })
    
  return (
      <group position={position}> 
          <mesh geometry={boxGeometry} material={floor2kMaterial} scale={[4,0.2,4]} receiveShadow/>
          <RigidBody ref={obstacle} type='kinematicPosition' position={[0,0.3,0]} restitution={0.5} friction={0}>
              <mesh geometry={boxGeometry} material={obstacleMaterial} position={[0,0.1,0]} scale={[1.5,1.5,0.3]} castShadow receiveShadow/>
          </RigidBody>
      </group>
    
  )
}

export default AxeBlock
