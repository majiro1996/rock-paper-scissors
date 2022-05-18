//score
let playerScore=0
let computerScore=0
let playerSelection
//function for random Rock, Paper or Scissors
function computerPlay(){
    let options=["rock","paper","scissors"];
    let play=options[Math.floor(Math.random()*options.length)];
    return play
}
//function for a single round of the game
function singleRound(playerSelection,computerSelection)
{ 
    let player=playerSelection.toLowerCase()
    if (player === computerSelection){return "tie"}
    else if (player==="rock" && computerSelection==="paper")
    {return "You Lose, Paper beats Rock. "+"Computer score: "+ ++computerScore}
    else if (player==="rock" && computerSelection==="scissors")
    {return "You Win, Rock beats Scissors. "+"Player score: "+ ++playerScore}
    else if (player==="paper" && computerSelection==="scissors")
    {return "You Lose, Scissors beats Paper. "+"Computer score: "+ ++computerScore}
    else if (player==="paper" && computerSelection==="rock")
    {return +"You Win, Paper beats Rock. "+"Player score: "+ ++playerScore}
    else if (player==="scissors" && computerSelection==="rock")
    {return "You Lose, Rock beats Scissors. "+"Computer score: "+ ++computerScore}
    else if (player==="scissors" && computerSelection==="paper")
    {return "You Win, Scissors beats Paper. "+"Player score: "+ ++playerScore}
    else {return "That item is not in the game!"}
}
//funcion for a game of 5 rounds
function game()
{ 
    for (let i=0;i<5;i++)
    {  
        playerSelection=prompt("choose");
        console.log(singleRound(playerSelection,computerPlay()))
        if (i===4 && playerScore>computerScore)
        {return console.log("YOU WIN!"+ playerScore+"-"+computerScore)}
        else if (i===4 && playerScore<computerScore)
        {return console.log("YOU LOSE!"+ playerScore+"-"+computerScore)}       
    }
}
game()