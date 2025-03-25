import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import React from 'react'

const Hamburgare = () => {
  const Hamburgare = useGLTF('./hamburger.glb')
  Hamburgare.scene.children.forEach((mesh) => {
    mesh.castShadow = true
  }
  )
  return (
    <>
    <RigidBody position={[0,0.2,0]} type='fixed' colliders="hull" restitution={0.2} friction={0}>
      <primitive object={Hamburgare.scene} scale={0.2} />
    </RigidBody>
    </>
  )
}

export default Hamburgare
