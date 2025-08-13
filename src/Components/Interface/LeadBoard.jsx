import React, { useState } from 'react'
import "./Interface.scss"

const LeadBoard = (time) => {
    const [TopPlayer, setTopPlayer] = useState({ name: "Setare", time: 100 })
    if(time.time){
       if(TopPlayer.time>time.time){
        console.log("get new winner")
       }
    }
    return (
        <div className='leadBoard'>
            <p>⭐️ {`${TopPlayer.name} : ${TopPlayer.time}`}</p>
        </div>


    )
}

export default LeadBoard
