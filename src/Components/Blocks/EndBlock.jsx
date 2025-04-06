import React from 'react'
import * as THREE from 'three'
import Hamburgare from '../Hamburgare'
import { Float,Text } from '@react-three/drei'

const boxGeometry = new THREE.BoxGeometry(1,1,1) 
const floor1kMaterial = new THREE.MeshStandardMaterial({color: 'limegreen'})

const EndBlock = ({position=[0,0,0]}) => {
  return (

      <group position={position}> 
        <Float floatIntensity={ 0.25 } rotationIntensity={ 0.25 }>
          <Text
          font="./bebas-neue-v9-latin-regular.woff"
          scale={ 3}
          position={ [ 0, 2.75, 1.5 ] }
          rotation-y={ - Math.PI  }

           >
          FINISH
          </Text>
        </Float>
      <Hamburgare/>
          <mesh geometry={boxGeometry} material={floor1kMaterial} scale={[4,0.2,4]} receiveShadow/> 
      </group>
    
  )
}

export default EndBlock
