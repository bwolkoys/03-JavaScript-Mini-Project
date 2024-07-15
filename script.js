//prompt user for r, p, or s
const choices = [`rock`, `paper`, `scissors`];

//
function startRockPaperScissorGame() {
    const userChoice = prompt("Please pick either rock, paper, or scissors.")
    const userChoiceIsValid = choices.includes(userChoice.toLowerCase());

    if (userChoiceIsValid) {
        console.log("Choice is valid")
        const computerChoice = choices[Math.floor(Math.random() * 3)]
        console.log(computerChoice)
        if (userChoice === "rock" && computerChoice === "rock") {
            alert("It's a tie!")
        }
        else if (userChoice === "rock" && computerChoice === "paper") {
            alert("You lose!")
        }
        else if (userChoice === "rock" && computerChoice === "scissors") {
            alert("You win!")
        }
        else if (userChoice === "paper" && computerChoice === "paper") {
            alert("It's a tie!")
        }
        else if (userChoice === "paper" && computerChoice === "rock") {
            alert("You win!")
        }
        else if (userChoice === "paper" && computerChoice === "scissors") {
            alert("You lose!")
        }
        else if (userChoice === "scissors" && computerChoice === "scissors") {
            alert("It's a tie!")
        }
        else if (userChoice === "scissors" && computerChoice === "rock") {
            alert("You lose!")
        }
        else if (userChoice === "scissors" && computerChoice === "paper") {
            alert("You win!")
        }



    } else {
        startRockPaperScissorGame();
    }
}



startRockPaperScissorGame();
