deBug = false;
    if(deBug == true) console.log("JS debug is running");

/* ---------- Code to run ---------- */

const roundNumber = document.getElementById("roundNumber");
const playerScoreBoard = document.getElementById("playerScore");
const computerScoreBoard = document.getElementById("computerScore");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");

let round = 1,
playerScore = 0,
computerScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playGame(button.id);
  });
});


/* ---------- Functions ---------- */

function getRandomNumber(n) {
    randomNumber = Math.floor(Math.random() * n);
    return randomNumber;
}

function getComputerChoice() {
    let x = getRandomNumber(3);
    switch(x)
        {
            case 0: choice = "rock"
                    return choice;
            case 1: choice = "paper"
                    return choice;
            case 2: choice = "scissors"
                    return choice;
        }
}

function playGame(choice) {
    info2.firstChild.nodeValue = ("");
    playRound(choice)
    //if either player has won 3 rounds (best of 5) we want to stop the game
    if (playerScore == 3 || (round == 6 && playerScore > computerScore))
        {
            info1.firstChild.nodeValue = ("Well done, you are victorious!!");
            info2.firstChild.nodeValue = ("Care to play again?");
            resetGame();  
        }
    else if(computerScore == 3 || (round == 6 && computerScore >= playerScore))
        {
            info1.firstChild.nodeValue = ("The computer has won. Better luck next time."); 
            info2.firstChild.nodeValue = ("Care to play again?");
            resetGame();  
        }
    }

function playRound(choice) {
    let computerChoice = getComputerChoice();
    let roundResult = getRoundResults(choice,computerChoice);
    declareRoundResult(choice,computerChoice,roundResult);
    updateScore(roundResult) ;
    round = round + 1
    }

function getRoundResults (player, computer) {
if(player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper")
    {
        return "win";
    }
else if(player == "rock" && computer == "paper" || player == "paper" && computer == "scissors" || player == "scissors" && computer == "rock")
    {
        return "lose";
    }
else if(player == "rock" && computer == "rock" || player == "paper" && computer == "paper" || player == "scissors" && computer == "scissors")
    {
        return "draw";
    }
}

function declareRoundResult(player, computer, result) {
player = capitaliseFirstLetter(player)
switch(result)
    {
        case "win": info1.firstChild.nodeValue = ("" + player + " vs " + computer + ": Congratulations, you win!!")
                    break;
        case "lose": info1.firstChild.nodeValue = ("" + player + " vs " + computer + ": Uh oh, you lose!!");
                    break;
        case "draw": info1.firstChild.nodeValue = ("" + player + " vs " + computer + ": This is a draw.");
                    break;
    }
}

function capitaliseFirstLetter(string) 
    {
        //calculate text length so it slices correctly for both first letter and remainder of string
        let stringLength = string.length;
        let lengthToCut = 1 - stringLength
        let firstLetter = string.slice(0,1);
        let remainingString = string.slice(lengthToCut);
        let capitalised = firstLetter.toUpperCase();
        let prettyWord = capitalised + remainingString
        return prettyWord;
    }

function updateScore(roundResult) {
    if(roundResult == "win")
        {
            playerScore = playerScore + 1
            computerScore = computerScore
        }
    else if(roundResult == "lose")
        {
            playerScore = playerScore
            computerScore = computerScore + 1
        }
    
        console.log("Round " + round + " results are: Player: " + playerScore + " vs Computer: " + computerScore);
       
        roundNumber.firstChild.nodeValue = ("Round: " + round);
        playerScoreBoard.firstChild.nodeValue = ("Player: " + playerScore);
        computerScoreBoard.firstChild.nodeValue = ("Computer: " + computerScore);
}

function resetGame() {
    round = 1,
    playerScore = 0,
    computerScore = 0;
}