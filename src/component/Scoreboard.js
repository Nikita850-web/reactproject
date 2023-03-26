import React from 'react'
import "./Scoreboard.css"
export const Scoreboard=({scores,xPlaying})=>{
    const{xScore,oScore}=scores;
    return(
        <div className="scoreboard">
            <span className={`score x-score ${!xPlaying && "inactive" }`}>Player 1-{xScore}</span>
            <span className={`score o-score ${xPlaying && "inactive"}`}>Player 2-{oScore}</span>
        </div>
    )
} 