import { RigidBody,useRapier } from '@react-three/rapier'
import React, { use, useEffect,useState } from 'react'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import jump from './Jump'
import useGame from '../../Stores/useGame'

const Ball = () => {
    const [subscribeKeys,getKeys] = useKeyboardControls()
    const ballRef = useRef()
    const {rapier,world}= useRapier()

    const [SmoothedCameraPosition]=useState(()=>new THREE.Vector3(0,10,-10))
    const [SmoothedTargetPosition]=useState(()=>new THREE.Vector3())

    //usegame hook 
    const startGame=useGame((state)=>state.startGame)
    const endGame=useGame((state)=>state.endGame)
    const blockCount=useGame((state)=>state.blockCount)
    const restartGame=useGame((state)=>state.restartGame)

    
useEffect(()=>{  

   const unSubscribeReset= useGame.subscribe(
    (state)=>state.gamePhase,
    (phase)=>{
        if(phase==='ready'){
            ballRef.current.setTranslation({x:0,y:1,z:0})
            ballRef.current.setLinvel({x:0,y:0,z:0})
            ballRef.current.setAngvel({x:0,y:0,z:0})
        }
       
    }
    )

   const unSubscribeJump =subscribeKeys(           // Subscribekeys is listening to jump key in the selector function
        (state)=>{
            return state.jump
        },

        (jumpValue)=>{
            if(jumpValue){
              jump(ballRef,rapier,world)
            }
        }
        
    )
   const unSubscribeAnyKey = subscribeKeys(()=>{   // Subscribekeys is listening to any key in the selector function
        startGame()
    })


    return ()=>{
        unSubscribeJump()
        unSubscribeAnyKey()
        unSubscribeReset()
    }
},[])

    useFrame((state,delta)=>{
        const {forward,backward,left,right} = getKeys()

        const Impulse={x:0, y:0,z:0}
        const Torque={x:0, y:0,z:0}

        const speed=delta* 0.5

        if(forward){
            Impulse.z += speed
            Torque.x += speed
        }
        if(backward){
            Impulse.z -= speed
            Torque.x -= speed
        }
        if(right){
            Impulse.x +=speed
            Torque.z += speed
        }
        if(left){
            Impulse.x -=speed
            Torque.z -= speed
        }

        ballRef.current.applyImpulse(Impulse)
        ballRef.current.applyTorqueImpulse(Torque)

        /*
        Camera movement
         */
        const BallPosition = ballRef.current.translation()

        const CameraPosition = new THREE.Vector3()
        CameraPosition.copy(BallPosition)
        CameraPosition.z -= 2
        CameraPosition.y += 0.8

        const CameraTarget=new THREE.Vector3()
        CameraTarget.copy(BallPosition)
        CameraTarget.y += 0.25

        //Lerping
        SmoothedCameraPosition.lerp(CameraPosition,4*delta)
        SmoothedTargetPosition.lerp(CameraTarget,4*delta)
        state.camera.position.copy(SmoothedCameraPosition)   
        state.camera.lookAt(SmoothedTargetPosition)  
        
        
        /**
         * phases
         */
        if ((BallPosition.z)>=blockCount*4+2) {
            endGame()
        }
        if (BallPosition.y<=-1) {
            restartGame()
        }
     
    })
  return (
   <>
    <RigidBody ref={ballRef} canSleep={false} colliders="ball" position={[0,1,0]} restitution={0.2} friction={1} linearDamping={0.5} angularDamping={0.5}>
        <mesh castShadow>
            <icosahedronGeometry args={[0.3,1]}/>
            <meshStandardMaterial flatShading color="mediumpurple"/>
        </mesh>
    </RigidBody>

   </>
  )
}

export default Ball
