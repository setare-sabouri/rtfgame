import React, { useRef, useState } from 'react'
import { RigidBody, useRapier } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useKeyboardControls } from '@react-three/drei'

import useBallControls from './useBallControls'

const Ball = () => {
  const ballRef = useRef()
  const { rapier, world } = useRapier()
  const [SmoothedCameraPosition] = useState(() => new THREE.Vector3(0, 10, -10))
  const [SmoothedTargetPosition] = useState(() => new THREE.Vector3())

  const [subscribeKeys, getKeys] = useKeyboardControls()

  // Use custom hook for game logic subscriptions
  const { endGame, restartGame, blockCount } = useBallControls(
    ballRef,
    rapier,
    world,
    getKeys
  )

  useFrame((state, delta) => {
    const { forward, backward, left, right } = getKeys()

    const Impulse = { x: 0, y: 0, z: 0 }
    const Torque = { x: 0, y: 0, z: 0 }

    const speed = delta * 0.5

    if (forward) {
      Impulse.z += speed
      Torque.x += speed
    }
    if (backward) {
      Impulse.z -= speed
      Torque.x -= speed
    }
    if (right) {
      Impulse.x += speed
      Torque.z += speed
    }
    if (left) {
      Impulse.x -= speed
      Torque.z -= speed
    }

    ballRef.current.applyImpulse(Impulse)
    ballRef.current.applyTorqueImpulse(Torque)

    // Camera movement logic
    const BallPosition = ballRef.current.translation()

    const CameraPosition = new THREE.Vector3()
    CameraPosition.copy(BallPosition)
    CameraPosition.z -= 2
    CameraPosition.y += 0.8

    const CameraTarget = new THREE.Vector3()
    CameraTarget.copy(BallPosition)
    CameraTarget.y += 0.25

    SmoothedCameraPosition.lerp(CameraPosition, 4 * delta)
    SmoothedTargetPosition.lerp(CameraTarget, 4 * delta)
    state.camera.position.copy(SmoothedCameraPosition)
    state.camera.lookAt(SmoothedTargetPosition)

    // phases
    if (BallPosition.z >= blockCount * 4 + 2) {
      endGame()
    }
    if (BallPosition.y <= -1) {
      restartGame()
    }
  })

  return (
    <RigidBody ref={ballRef} canSleep={false} colliders="ball" position={[0, 1, 0]} restitution={0.2} friction={1} linearDamping={0.5} angularDamping={0.5}>
      <mesh castShadow>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial flatShading color="mediumpurple" />
      </mesh>
    </RigidBody>
  )
}

export default Ball
