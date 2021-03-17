import React, { useState, useEffect } from 'react'
import './Scoreboard.css'

function Scoreboard(props) {

    const [highScore, setHighscore] = useState(0)

    useEffect(() => {
        if (props.count > highScore) {
            setHighscore(props.count)
        }
        
        return
    },[props.count])

    
    return (
        <div className="scoreboardBody">
            <div className="score">Score: {props.count}</div>
            <div className="bestScore">HighScore: {highScore}</div>
        </div>
    )
}
export default Scoreboard