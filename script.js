//funtion for either Rock, Paper or Scissors
function computerPlay(){
    let options=["rock","paper","scissors"];
    let play=options[Math.floor(Math.random()*options.length)];
    return play
}
console.log("computer:"+computerPlay())