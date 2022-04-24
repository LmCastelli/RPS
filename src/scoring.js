function getScore(scoringHand, opponentHand) {
    let score = 0;

    for(let i=0; i<scoringHand.length; i++){
        for(let j=0; j<opponentHand.length; j++){
            if(scoringHand[i] === "rock"){
                if(opponentHand[j] === "scissors"){
                    score += 1;
                };
            }else if(scoringHand[i] === "paper"){
                if(opponentHand[j] === "rock"){
                    score += 1;
                };
            }else{
                if(opponentHand[j] === "paper"){
                    score += 1;
                };
            }
        }
    }
    return score;
}

function scoring (playerHand,compHand)  {

    let playerScore = 0;
    let compScore = 0;
    const playerHands = playerHand;
    const compHands = compHand;

    playerScore += getScore(playerHands, compHands);
    compScore += getScore(compHands, playerHands);

    return [playerScore, compScore];
}


export default scoring; 