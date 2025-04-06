import {create} from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'


export default create(subscribeWithSelector(
  (set)=>({

    blockCount: 3,
    startTime: 0,
    endtime: 0,
    gamePhase: 'ready',

    startGame:()=>{
      set((state)=>{
        if(state.gamePhase === 'ready'){
          return{gamePhase:'playing',startTime:Date.now()}
        }
        
        else return{}
      
      })

    },

    restartGame:()=>{
      
      set((state)=>{

        if(state.gamePhase === 'playing' || state.gamePhase === 'ended'){

          return{
            gamePhase:'ready'
          }
        }
        else return{}
       
      })
    },

    endGame:()=>{
      set((state)=>{

        if(state.gamePhase==='playing'){

          return{ gamePhase:'ended',endtime:Date.now() }
        }
        else return{}
      
      })
    }
})
))
