//funtion for random Rock, Paper or Scissors
function computerPlay(){
    let options=["rock","paper","scissors"];
    let play=options[Math.floor(Math.random()*options.length)];
    return play
}
console.log("computer:"+computerPlay());
//function for a single round of the game
function round(playerSelection,computerSelection){ 
let player=playerSelection.toLowerCase()
if (player === computerSelection){return "tie"}
else if (player==="rock" & computerSelection==="paper"){return "You Lose, Paper beats Rock"}
else if (player==="rock" & computerSelection==="scissors"){return "You Win, Rock beats Scissors"}
else if (player==="paper" & computerSelection==="scissors"){return "You Lose, Scissors beats Paper"}
else if (player==="paper" & computerSelection==="rock"){return "You Win, Paper beats Rock"}
else if (player==="scissors" & computerSelection==="rock"){return "You Lose, Rock beats Scissors"}
else if (player==="scissors" & computerSelection==="paper"){return "You Win, Scissors beats Paper"}
else "That item is not in the game!"
}

