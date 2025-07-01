let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgParagraph = document.querySelector("#msg");

const userChoicePara = document.querySelector("#user-score");
const compChoicePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
