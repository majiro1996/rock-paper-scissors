//score
let playerScore=0
let computerScore=0
//function for random Rock, Paper or Scissors
function computerPlay(){
    let options=["rock","paper","scissors"];
    let play=options[Math.floor(Math.random()*options.length)];
    return play;
};
//function for a single round of the game
function singleRound(playerSelection,computerSelection){ 
    if (playerSelection=== computerSelection){return "tie"}
    else if (playerSelection==="rock" && computerSelection==="paper")
    {return "You Lose, Paper beats Rock. "+"Computer score: "+ ++computerScore}
    else if (playerSelection==="rock" && computerSelection==="scissors")
    {return "You Win, Rock beats Scissors. "+"Player score: "+ ++playerScore}
    else if (playerSelection==="paper" && computerSelection==="scissors")
    {return "You Lose, Scissors beats Paper. "+"Computer score: "+ ++computerScore}
    else if (playerSelection==="paper" && computerSelection==="rock")
    {return "You Win, Paper beats Rock. "+"Player score: "+ ++playerScore}
    else if (playerSelection==="scissors" && computerSelection==="rock")
    {return "You Lose, Rock beats Scissors. "+"Computer score: "+ ++computerScore}
    else if (playerSelection==="scissors" && computerSelection==="paper")
    {return "You Win, Scissors beats Paper. "+"Player score: "+ ++playerScore}
    else {return "That item is not in the game!"}
};
const buttons=document.querySelectorAll(".option");
buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        let text=singleRound(button.id,computerPlay());
        let results=document.querySelector("#results");
        let round= document.createElement("div");
        round.textContent=text;
        results.appendChild(round);}

        //console.log(singleRound(button.id,computerPlay()))});
)})


//funcion for a game of 5 rounds
/*function game()
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
};
game();*/
