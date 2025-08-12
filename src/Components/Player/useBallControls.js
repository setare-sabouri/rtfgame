import { useEffect } from 'react'
import { useKeyboardControls } from '@react-three/drei'
import useGame from '../../Stores/useGame'
import jump from './Jump'

const useBallControls = (ballRef, rapier, world, getKeys, delta) => {
  const [subscribeKeys] = useKeyboardControls()

  const startGame = useGame((state) => state.startGame)
  const endGame = useGame((state) => state.endGame)
  const blockCount = useGame((state) => state.blockCount)
  const restartGame = useGame((state) => state.restartGame)

  useEffect(() => {
    const unSubscribeReset = useGame.subscribe(
      (state) => state.gamePhase,
      (phase) => {
        if (phase === 'ready') {
          ballRef.current.setTranslation({ x: 0, y: 1, z: 0 })
          ballRef.current.setLinvel({ x: 0, y: 0, z: 0 })
          ballRef.current.setAngvel({ x: 0, y: 0, z: 0 })
        }
      }
    )

    const unSubscribeJump = subscribeKeys(
      (state) => state.jump,
      (jumpValue) => {
        if (jumpValue) {
          jump(ballRef, rapier, world)
        }
      }
    )

    const unSubscribeAnyKey = subscribeKeys(() => {
      startGame()
    })

    return () => {
      unSubscribeJump()
      unSubscribeAnyKey()
      unSubscribeReset()
    }
  }, [ballRef, rapier, world, subscribeKeys, startGame])

  // Return game control functions to use them in useFrame later
  return { endGame, restartGame, blockCount }
}

export default useBallControls
