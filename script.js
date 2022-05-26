//score
let playerScore=0
let computerScore=0
function keepScore(){
    let score=document.querySelector("#score");
    score.textContent=(" Player "+playerScore+" - "+"Computer "+computerScore);
};
//function for random Rock, Paper or Scissors
function computerPlay(){
    let options=["rock","paper","scissors"];
    let play=options[Math.floor(Math.random()*options.length)];
    return play;
};
//function for a single round of the game
function singleRound(playerSelection,computerSelection){ 
    if (playerScore>4)
    {return "YOU WIN!!"}
    else if (computerScore>4)
    {return "YOU LOSE!!"}
    else if (playerSelection=== computerSelection)
    {return "tie"}
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
};
const buttons=document.querySelectorAll(".option");
buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        let text=singleRound(button.id,computerPlay());
        let results=document.querySelector("#results");
        let round= document.createElement("div");
        round.textContent=text;
        results.appendChild(round);
        keepScore();
    })
})

if (playerScore>4){"YOY WIN!!"}


