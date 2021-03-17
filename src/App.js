import React, { useState } from 'react'
import CardContainer from "./components/CardContainer";
import Scoreboard from "./components/Scoreboard";
import './App.css'


function App() {

  const [count, setCount] = useState(-1)

  return (
    <div>
      <h1 className="title">Memory-Card Game</h1>
      <Scoreboard count={count}/>
      <CardContainer count={count} setCount={setCount}/>
    </div>
  );
}

export default App;
