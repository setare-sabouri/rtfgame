import React,{ useEffect } from 'react'
import "./Interface.scss"
import { useKeyboardControls } from '@react-three/drei'
import useGame from '../../Stores/useGame'
import { useRef } from 'react'
import { addEffect } from 'react-three-fiber'

const Interface = () => {
  const timeRef=useRef()
  const Forward=useKeyboardControls(state => state.forward)
  const Backward=useKeyboardControls(state => state.backward)
  const Right=useKeyboardControls(state => state.right)
  const Left=useKeyboardControls(state => state.left)
  const Jump=useKeyboardControls(state => state.jump)
  const restartGame=useGame((state)=>state.restartGame)
  const phase=useGame((state)=>state.gamePhase)


useEffect(()=>{
  const unSubscribeEffect=addEffect(()=>{
    const state=useGame.getState()
    let elapsedTime=0
    if(state.gamePhase==='playing'){
      elapsedTime=(Date.now()-state.startTime)/1000
    }
    else if(state.gamePhase==='ended'){
      elapsedTime=(state.endtime-state.startTime)/1000
    }

    elapsedTime=elapsedTime.toFixed(2)
    if(timeRef.current){
      timeRef.current.innerHTML=elapsedTime
    }
 })

},[])

  return (
    <div className='interface'>
      <div ref={timeRef} className='time'> 0.00</div>
      {phase==='ended' && <div className='restart' onClick={restartGame}> Restart </div>}
      <div className="controls">
        <div className={"raw"}>
            <div className={`key ${Forward ? "active" : ""}`}></div>
        </div>
        <div className="raw">
            <div className={`key ${Left ? "active" : ""}`}></div>
            <div className={`key ${Backward ? "active" : ""}`}></div>
            <div className={`key ${Right ? "active" : ""}`}></div>
        </div>
        <div className="raw">
            <div className={`key large  ${Jump ? "active" : ""}`}></div>
        </div>
    </div>
    </div>
  )
}

export default Interface
