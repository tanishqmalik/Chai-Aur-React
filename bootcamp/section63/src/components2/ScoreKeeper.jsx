import React, { useState } from 'react'

const ScoreKeeper = () => {
    const [ Scores, SetScores]=useState({p1Score:0 , p2Score:0});


    const p1changeScore = () =>{
        SetScores((Scores)=>{
            return { ...Scores, p1Score: Scores.p1Score+1}
        })
    }

    const p2changeScore = () =>{
        SetScores((Scores)=>{
            return { ...Scores, p2Score: Scores.p2Score+1}
        })
    }


  return (
    <div>
      <p>player 1 :-{Scores.p1Score}</p>
      <p>player 2:- {Scores.p2Score}</p>

      <button onClick={p1changeScore}>Player 1</button>
      <button onClick={p2changeScore}>Player 2</button>
    </div>
  )
}

export default ScoreKeeper
