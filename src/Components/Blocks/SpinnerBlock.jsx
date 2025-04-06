import React from 'react'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useRef,useState} from 'react'
import { useFrame } from 'react-three-fiber'

const boxGeometry = new THREE.BoxGeometry(1,1,1) 
const floor2kMaterial = new THREE.MeshStandardMaterial({color: 'greenyellow'})
const obstacleMaterial = new THREE.MeshStandardMaterial({color: 'orangered'})

const StartBlock = ({position=[0,0,0]}) => {
    const obstacle = useRef()
    const [speed] = useState(()=>(Math.random()+0.5)*(Math.random()>0.5?1:-1))

    useFrame((state) => {
      if (!obstacle.current) return

      const time = state.clock.getElapsedTime()
      const rotation= new THREE.Quaternion() 
      rotation.setFromEuler(new THREE.Euler(0, time*speed, 0))
      obstacle.current.setNextKinematicRotation(rotation)
    })
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
