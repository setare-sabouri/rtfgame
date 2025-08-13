import React, { useEffect, useState } from 'react'
import "./Interface.scss"
import { useKeyboardControls } from '@react-three/drei'
import useGame from '../../Stores/useGame'
import { addEffect } from 'react-three-fiber'
import LeadBoard from './LeadBoard'

const Interface = () => {
  const [elapsedTime, setElapsedTime] = useState("0.00")
  const Forward = useKeyboardControls(state => state.forward)
  const Backward = useKeyboardControls(state => state.backward)
  const Right = useKeyboardControls(state => state.right)
  const Left = useKeyboardControls(state => state.left)
  const Jump = useKeyboardControls(state => state.jump)
  const restartGame = useGame((state) => state.restartGame)
  const phase = useGame((state) => state.gamePhase)

  useEffect(() => {
    const unSubscribeEffect = addEffect(() => {
      const state = useGame.getState()
      let elapsed = 0
      if (state.gamePhase === 'playing') {
        elapsed = (Date.now() - state.startTime) / 1000
      } else if (state.gamePhase === 'ended') {
        elapsed = (state.endtime - state.startTime) / 1000
      }
      setElapsedTime(elapsed.toFixed(2))
    })

    // cleanup on unmount
    return () => {
      unSubscribeEffect()
    }
  }, [])

  return (
    <div className='interface'>
      {/* <LeadBoard time={(phase==='ended')?elapsedTime:null} /> */}
      <div className='time'>{elapsedTime}</div>
      {phase === 'ended' && <div className='restart' onClick={restartGame}> Restart </div>}
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
