import {create} from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'


export default create(subscribeWithSelector(
  (set)=>({

    blockCount: 3,
   
    gamePhase: 'ready',

    startGame:()=>{
      set((state)=>{
        if(state.gamePhase === 'ready'){
          console.log("sssss")

          return{
            gamePhase:'playing'
          }
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

          return{
            gamePhase:'ended'
          }
        }
        else return{}
      
      })
    }
})
))
