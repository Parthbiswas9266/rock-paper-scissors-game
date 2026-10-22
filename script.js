let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#computer-score");

const genCompChoice = () =>{
    //computer generating choice from rock paper sissors
    const option =["rock", "paper", "sissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option [randIdx];
}

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was Draw! Play again.";
    msg.style.backgroundColor = "black";
}



const showWinner = (userWin, compChoice, userChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Loose")
        msg.innerText = `You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}



const playGame = (userChoice) =>{
    console.log("User choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

 if(userChoice === compChoice)  {
 //Draw Game
 drawGame();
 }else{
    let userWin = true;
    if(userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true;  
    }else if (userChoice === "paper"){
        userWin = compChoice === "sissors" ? false : true;
    }else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, compChoice, userChoice)
 }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    } )
})