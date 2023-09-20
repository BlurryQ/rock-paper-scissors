/* ---------- Code to run ---------- */

const roundNumber = document.getElementById("roundNumber");
const playerScoreBoard = document.getElementById("playerScore");
const computerScoreBoard = document.getElementById("computerScore");
const info = document.getElementById("info");

info1 = document.createElement('div');
info1.classList.add("info");
info1.textContent = `You awake in a strange house, with no idea how you got there. A shadowy figure appears...`;
info.appendChild(info1);

info2 = document.createElement('div');
info2.classList.add("info");
info2.textContent = `"You may leave if you beat me at a game of rock, paper, scissors. However if you should lose, or even draw... your soul is mine!!"`;
info.appendChild(info2);

info3 = document.createElement('div');
info3.classList.add("info");
info3.style.cssText = `font-size: 15px;` 
info3.textContent = `Click on "Round" to change from "best of 5" to unlimited`;
info.appendChild(info3);

let round = 1,
playerScore = 0,
computerScore = 0,
noRoundLimit = false;
console.log("No round limit off")

roundNumber.addEventListener('click', () => {
    loop();
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let choice = button.id;
    playGame(choice);
    }); 
});  

/* ---------- Functions ---------- */

function loop() {
    if (noRoundLimit == true) {
        noRoundLimit = false;
        roundNumber.style.color = 'red';
        roundNumber.textContent = "Round: 0";
        resetGame(); 
    } else {
        noRoundLimit = true;
        roundNumber.style.color = 'green';
        roundNumber.textContent = "Unlimited Round: " + (round-1); }
}

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
    info2.replaceChildren();
    info3.replaceChildren();
    playRound(choice)
    if(noRoundLimit == true) {
        return;
    }
    //if either player has won 3 rounds (best of 5) we want to stop the game
    if (round == 6 && playerScore == computerScore)
        {
            info1.replaceChildren("You have tied... but that's not good enough...");
            info2.replaceChildren(`Your soul is forfeit... or is it? "Play again?"`);
            info3.replaceChildren(`Or click on "Round" to play unlimited rounds.`);
            resetGame();  
        }
    else if (playerScore == 3 || (round == 6 && playerScore > computerScore))
        {
            info1.replaceChildren("Well done, you are victorious!!");
            info2.replaceChildren("Care to play again?");
            info3.replaceChildren(`Or click on "Round" to play unlimited rounds.`);
            resetGame();  
        }
    else if(computerScore == 3 || (round == 6 && computerScore >= playerScore))
        {
            info1.replaceChildren("You have lost, you feel your soul leaving your body."); 
            info2.replaceChildren(`As your body grows cold you hear "Care to play again?"`);
            info3.replaceChildren(`Or click on "Round" to play unlimited rounds.`);
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
       
        noRoundLimit == true ? roundNumber.textContent = "Unlimited Round: " + round : roundNumber.textContent = "Round: " + round;
        playerScoreBoard.textContent = "Player: " + playerScore;
        computerScoreBoard.textContent = "Computer: " + computerScore;
}

function resetGame() {
    round = 1,
    playerScore = 0,
    computerScore = 0;
}