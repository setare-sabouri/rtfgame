import React from 'react'
import "./Interface.scss"
import { useKeyboardControls } from '@react-three/drei'
import useGame from '../../Stores/useGame'

const Interface = () => {
  const Forward=useKeyboardControls(state => state.forward)
  const Backward=useKeyboardControls(state => state.backward)
  const Right=useKeyboardControls(state => state.right)
  const Left=useKeyboardControls(state => state.left)
  const Jump=useKeyboardControls(state => state.jump)
  const restartGame=useGame((state)=>state.restartGame)
  const phase=useGame((state)=>state.gamePhase)

  return (
    <div className='interface'>
      <div className='time'> 0.00</div>
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
