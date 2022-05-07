import scoring from "./scoring";
import "./styles.css"
import { useState } from "react";

function App() {

  const [firstHand, setFirstHand] = useState("");
  const [secondHand, setSecondHand] = useState("")
  const [compHand, setCompHand] = useState({firstComp: "Rock", secondComp: "Paper"});
  let [playerScore, setPlayerScore] = useState(0)
  let [compScore, setCompScore] = useState(0)
  const [win, setWin] = useState(false)

  const options = ["Rock", "Paper", "Scissors"]

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
          <p>Player hands: {firstHand} & {secondHand}</p>
        </div>
        <div className="Hands">
          { (compHand.firstComp!==null) ?
            <p>Comp hand: {compHand.firstComp} & {compHand.secondComp}</p>:null
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
              value="Rock"
              name="firstHand"
              onChange={handleFirstHandChange}
            />
          </label>
          <br/>
          <label>Paper
            <input 
              type="radio"
              value="Paper"
              name="firstHand"
              onChange={handleFirstHandChange}
            />
          </label>
          <br/>
          <label>Scissors
            <input 
              type="radio"
              value="Scissors"
              name="firstHand"
              onChange={handleFirstHandChange}
            />
          </label>
          </div>
          <div className="imgContainer">
            { (firstHand === "Rock")?
              <img className="Rock" src="https://townsquare.media/site/723/files/2015/04/Pet-Rock-12.jpg?w=980&q=75" alt="rock" />
              :(firstHand === "Paper")?
              <img className="Paper" src="https://www.clipartkey.com/mpngs/m/25-259242_collection-of-notebook-loose-leaf-paper-cartoon.png" alt="paper" />
              :
              <img className="Scissors" src="https://thumbs.dreamstime.com/b/angry-scissors-cartoon-vector-illustration-49122109.jpg" alt="scissors" />
            }
          </div>
        </div>
        <h1>Second Hand</h1>
        <div className="HandSelector">
          <div className="Options">
          <label>Rock
            <input 
              type="radio"
              value="Rock"
              name="secondHand"
              onChange={handleSecondHandChange}
            />
          </label>
          <br/>
          <label>Paper
            <input 
              type="radio"
              value="Paper"
              name="secondHand"
              onChange={handleSecondHandChange}
            />
          </label>
          <br/>
          <label>Scissors
            <input 
              type="radio"
              value="Scissors"
              name="secondHand"
              onChange={handleSecondHandChange}
            />
          </label>
          </div>
          <div className="imgContainer">
            { (secondHand === "Rock")?
              <img className="Rock" src="https://townsquare.media/site/723/files/2015/04/Pet-Rock-12.jpg?w=980&q=75" alt="rock" />
              :(secondHand === "Paper")?
              <img className="Paper" src="https://www.clipartkey.com/mpngs/m/25-259242_collection-of-notebook-loose-leaf-paper-cartoon.png" alt="paper" />
              :
              <img className="Scissors" src="https://thumbs.dreamstime.com/b/angry-scissors-cartoon-vector-illustration-49122109.jpg" alt="scissors" />
            }
          </div>
        </div>
        
        <button>Submit</button>
      </form>:null
    }
    { !win ?
      <div className="CompHandContainer">
        <h1>Computer First Hand</h1>
        <div className="CompImgContainer">
          { (compHand.firstComp === "Rock")?
            <img className="Rock" src="https://townsquare.media/site/723/files/2015/04/Pet-Rock-12.jpg?w=980&q=75" alt="rock" />
            :(compHand.firstComp === "Paper")?
            <img className="Paper" src="https://www.clipartkey.com/mpngs/m/25-259242_collection-of-notebook-loose-leaf-paper-cartoon.png" alt="paper" />
            :
            <img className="Scissors" src="https://thumbs.dreamstime.com/b/angry-scissors-cartoon-vector-illustration-49122109.jpg" alt="scissors" />
          }
        </div>
        <h1>Computer Second Hand</h1>
        <div className="CompImgContainer">
        { (compHand.secondComp === "Rock")?
            <img className="Rock" src="https://townsquare.media/site/723/files/2015/04/Pet-Rock-12.jpg?w=980&q=75" alt="rock" />
            :(compHand.secondComp === "Paper")?
            <img className="Paper" src="https://www.clipartkey.com/mpngs/m/25-259242_collection-of-notebook-loose-leaf-paper-cartoon.png" alt="paper" />
            :
            <img className="Scissors" src="https://thumbs.dreamstime.com/b/angry-scissors-cartoon-vector-illustration-49122109.jpg" alt="scissors" />
          }
        </div>
      </div>:null
    }
      </div>
      <button className="Reset" onClick={handleReset}>Restart</button>
    </div>
  );
}

export default App;
