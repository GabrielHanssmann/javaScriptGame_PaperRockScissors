// ---==== CONSTANTS AND VARIABLES====--- //

// Variables //
let userScore = 0;
let computerScore = 0;

// Constants //
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// ---==== FUNCTIONS ====--- //

// Computer Random Choices //
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

// Capital Function // 

function convertToCapital(letter){
    if (letter === "rock") return "ROCK";
    if (letter === "paper") return "PAPER";
    return "SCISSOR";
}

// Winer Loser Function // 

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToCapital(userChoice) + " beats " + convertToCapital(computerChoice) + ". You Win!!!";
};

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "You Lose!! " + convertToCapital(userChoice) + " beats " + convertToCapital(computerChoice) + ". Skynet Wins!!!";
};

function draw(userChoice, computerChoice){
    computerScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToCapital(userChoice) + " is equal to " + convertToCapital(computerChoice) + ". It's a Draw!!!";
};

// Game Compare Choices //

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
           win(userChoice, computerChoice);
            break;

        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            lose(userChoice, computerChoice);
            break;

        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            draw(userChoice, computerChoice);
            break;
    };
};

// User Choices //

function main(){
    paper_div.addEventListener('click', () =>  {
        game("paper");
        console.log("WORKS")
    });

    scissors_div.addEventListener('click', () =>  {
        game("scissors");
        console.log("scissors WORKS")
    });

    rock_div.addEventListener('click', () =>  {
        game("rock");
        console.log("rock WORKS")
    });
};


main();