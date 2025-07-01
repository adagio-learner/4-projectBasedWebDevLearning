let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgParagraph = document.querySelector("#msg");

const userChoicePara = document.querySelector("#user-score");
const compChoicePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return option[randIndex];
}

const drawGame = () => {
    msgParagraph.innerText = "Game was Draw. Play again";
    msgParagraph.style.backgroundColor = "grey";
}

const playGame = (userChoice) => {
    // Generate Computer Choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
