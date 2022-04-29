import scoring from "./scoring";
import "./styles.css"
import { useState } from "react";

function App() {

  const [firstHand, setFirstHand] = useState("");
  const [secondHand, setSecondHand] = useState("")
  const [compHand, setCompHand] = useState({firstComp: null, secondComp: null});
  let [playerScore, setPlayerScore] = useState(0)
  let [compScore, setCompScore] = useState(0)
  const [win, setWin] = useState(false)

  const options = ["rock", "paper", "scissors"]

  const handlePlayerSubmit = e => {
    e.preventDefault();
    let comp1 = options[Math.floor(Math.random()*3)]
    let comp2 = options[Math.floor(Math.random()*3)]
    setCompHand({firstComp:comp1, secondComp:comp2})
    let tempScore = scoring([firstHand, secondHand],[comp1, comp2])
    setPlayerScore(playerScore += tempScore[0])
    setCompScore(compScore += tempScore[1])
    if(playerScore>20 || compScore > 20){
      setWin(true)
    }
  }

  const handleFirstHandChange = e => {
    setFirstHand(e.target.value)
  }

  const handleSecondHandChange = e => {
    setSecondHand(e.target.value)
  }

  function handleReset() {
    window.location.reload();
  }

  return (
    <div>
      <div className="Scoreboard">
        <div className="Score">
          <h1>Here is your score: {playerScore}</h1>
        </div>
        <div className="Score">
          <h1>Computer's  score: {compScore}</h1>
        </div>
      </div>
      <div className="HandDisplay">
        <div className="Hands">
          <p>Player hands: {firstHand} {secondHand}</p>
        </div>
        <div className="Hands">
          { (compHand.firstComp!==null) ?
            <p>Comp hand: {compHand.firstComp} {compHand.secondComp}</p>:null
          }
        </div>
      </div>






    <div className="HandContainer">
      
    { !win ?
      <form onSubmit={handlePlayerSubmit} className="HumanHands">
        <h1>First Hand</h1>
        <div className="HandSelector">
          <div className="Options">
          <label>Rock
            <input 
              type="radio"
              value="rock"
              name="firstHand"
              onChange={handleFirstHandChange}
            />
          </label>
          <br/>
          <label>Paper
            <input 
              type="radio"
              value="paper"
              name="firstHand"
              onChange={handleFirstHandChange}
            />
          </label>
          <br/>
          <label>Scissors
            <input 
              type="radio"
              value="scissors"
              name="firstHand"
              onChange={handleFirstHandChange}
            />
          </label>
          </div>
          <div className="imgContainer">
            <img className="image" src="https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png" alt="rock" />
          </div>
        </div>
        <h1>Second Hand</h1>
        <div className="HandSelector">
          <div className="Options">
          <label>Rock
            <input 
              type="radio"
              value="rock"
              name="secondHand"
              onChange={handleSecondHandChange}
            />
          </label>
          <br/>
          <label>Paper
            <input 
              type="radio"
              value="paper"
              name="secondHand"
              onChange={handleSecondHandChange}
            />
          </label>
          <br/>
          <label>Scissors
            <input 
              type="radio"
              value="scissors"
              name="secondHand"
              onChange={handleSecondHandChange}
            />
          </label>
          </div>
          <div className="imgContainer">
            <img className="image" src="https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png" alt="rock" />
          </div>
        </div>
        
        <button>Submit</button>
      </form>:null
    }
    
      <div className="CompHandContainer">
        <h1>Computer First Hand</h1>
        <div className="CompImgContainer">
          <img className="CompImage" src="https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png" alt="rock" />
        </div>
        <h1>Computer Second Hand</h1>
        <div className="CompImgContainer">
          <img className="CompImage" src="https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png" alt="rock" />
        </div>
      </div>
      </div>
      <button onClick={handleReset}>Restart</button>
    </div>
  );
}

export default App;
