let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    // rock, paper,seissor
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}
    
const drawGame =()=> {
    //console.log("game was draw");
    msg.innerText = "Game was Draw play again";
    msg.style.backgroundColor = "#081b31";
  
}

const showWinner = (userwin,userChoice,compChoice) => {
    if (userwin) {

        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = "you win",{userChoice},"beats",{compChoice};
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        //console.log("you lose");
        msg.innerText = "you lost",{compChoice},"beats your choice",{userChoice};
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice)
    const compChoice = genCompChoice();
    console.log("computer choice", compChoice)
    if (userChoice === compChoice) {
        drawGame()
    }
    else {
        let userwin = true
        if (userChoice === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userwin = compChoice === "scissor" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
 choice.addEventListener("click", () => {
   const userChoice = choice.getAttribute("id");
     //console.log("choice was clicked", userChoice);
     playGame(userChoice);
        
    });
});