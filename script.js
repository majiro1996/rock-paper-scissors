//score
let playerScore=0;
let computerScore=0;
const winningScore=4;
let round="nada";
function keepScore(){
    let score=document.querySelector("#score");
    score.textContent=(" Player "+playerScore+" - "+"Computer "+computerScore);
};
function declareWinner(){
    let results=document.querySelector("#results");
    if (playerScore>winningScore)
    {return results.textContent="YOU WIN!!"}
    else if (computerScore>winningScore)
    {return results.textContent="YOU LOSE!!"}}
//function for random Rock, Paper or Scissors
let play
function computerPlay(){
    let options=["rock","paper","scissors"];
    let taken=options[Math.floor(Math.random()*options.length)];
    play=taken;
    return taken;
};
//function for a single round of the game
function singleRound(playerSelection,computerSelection){ 
    if (computerScore>winningScore||playerScore>winningScore){}
    else if(playerSelection=== computerSelection)
    {round="tie";return "tie"}
    else if (playerSelection==="rock" && computerSelection==="paper")
    {round="lose"; ++computerScore;return "lose";}
    else if (playerSelection==="rock" && computerSelection==="scissors")
    {round="win",++playerScore;return "win";}
    else if (playerSelection==="paper" && computerSelection==="scissors")
    {round="win",++playerScore;return "win";}
    else if (playerSelection==="paper" && computerSelection==="rock")
    {round="win",++playerScore;return "win";}
    else if (playerSelection==="scissors" && computerSelection==="rock")
    {round="lose"; ++computerScore;return "lose";}
    else if (playerSelection==="scissors" && computerSelection==="paper")
    {round="win",++playerScore;return "win";}
};
//output function
function formOutput(){
    if (round==="win"){return"You "+ round +","+player+" beats "+play;}
    else if (round==="lose"){return"You "+ round +","+play+" beats "+player;}
    else if (round==="tie"){return"tie";};}    
//game algorithm

let player;
const buttons=document.querySelectorAll(".option");
buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        player=button.id;
        singleRound(player,computerPlay());
        let results=document.querySelector("#results");
        results.textContent=formOutput();
        keepScore();
        declareWinner();
        console.log(formOutput())
    })
})