import React from 'react'
import * as THREE from 'three'
import { Float,Text } from '@react-three/drei'
const boxGeometry = new THREE.BoxGeometry(1,1,1) 
const floor1kMaterial = new THREE.MeshStandardMaterial({color: 'limegreen'})

const StartBlock = ({position=[0,0,0]}) => {
  return (

      <group position={position}> 
      <Float floatIntensity={ 0.25 } rotationIntensity={ 0.25 }>
      <Text
        font="./bebas-neue-v9-latin-regular.woff"
        scale={ 0.5 }
         maxWidth={ 0.25 }
         lineHeight={ 0.75 }
         textAlign="right"
         position={ [ 0.75, 0.65, 1 ] }
        rotation-y={ - Math.PI * 0.8 }
>
    Marble Race

</Text>
      </Float>
          <mesh geometry={boxGeometry} material={floor1kMaterial} scale={[4,0.2,4]} receiveShadow/> 
      </group>
    
  )
}

export default StartBlock
