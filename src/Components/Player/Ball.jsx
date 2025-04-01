import { RigidBody,useRapier } from '@react-three/rapier'
import React, { useEffect } from 'react'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'
import { useRef } from 'react'


const Ball = () => {
    const [subscribeKeys,getKeys] = useKeyboardControls()
    const ballRef = useRef()
    const {rapier,world}= useRapier()
    const jump ={

        
    }
    
useEffect(()=>{    
   const unSubscribe =subscribeKeys(     // Subscribekeys is listening to jump key in the selector function
        (state)=>{
            return state.jump
        },

        (jumpValue)=>{
            if(jumpValue){
                const originPivotPoint= ballRef.current.translation()
                originPivotPoint.y -= 0.51
                const  direction ={ x:0,y:-1,z:0}
                const ray=new rapier.Ray(originPivotPoint,direction)
                const hit =world.castRay(ray,10,true)

                if (hit<0.15){ //we jump only if the distance to the ground is less than 0.15
                    ballRef.current.applyImpulse({x:0,y:0.3,z:0})

                }
            }
        }
        
    )
    return ()=>{
        unSubscribe()
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
