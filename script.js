let deBug = true;

if(deBug == true) console.log("JS is running");

//create a function to create a random number
function generateNumber(n) {
    getNumber = Math.floor(Math.random() * n);
    if(deBug == true) console.log("I have generated " + getNumber);
    return getNumber;
}


//create a function to convert number into choice
function getComputerChoice() {
    //generate random number
    let x = generateNumber(3);
    //change number into choice
    switch(x)
        {
            case 0: choice = "rock"
            if(deBug == true) console.log("I have chosen " + choice);
                    return choice
                    break;
            case 1: choice = "paper"
                    if(deBug == true) console.log("I have chosen " + choice);
                    return choice
                    break;
            case 2: choice = "scissors"
                    if(deBug == true) console.log("I have chosen " + choice);
                    return choice
                    break;
        }

}


function playerSelection() {
        //prompt for text entry
        enterChoice = prompt("Choose wisely: Rock, paper or scissors");
        //covert to lower case
        choiceLowercase = enterChoice.toLowerCase();
        if(deBug == true) console.log("Player has chosen " + choiceLowercase);
        //check it matches if not error
        if(!(choiceLowercase == "rock" || choiceLowercase == "paper" || choiceLowercase == "scissors"))
            {
                alert("You have not entered a valid option!!");
                if(deBug == true) console.log("ALERT!! Incorrect input by player")
                return null;
            }
        else
            {
                if(deBug == true) console.log("Player has input succesfully")
                return choiceLowercase;
            }
    }


function playRound (player, computer) {
    //win conditions
    if(deBug == true) console.log((player + " vs " + computer))
    if(player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper")
        {
            if(deBug == true) console.log("player wins")
            return "win";
        }
    //lose conditions
    else if(player == "rock" && computer == "paper" || player == "paper" && computer == "scissors" || player == "scissors" && computer == "rock")
        {
            if(deBug == true) console.log("player loses")
            return "lose";
        }
    //draw conditions
    else if(player == "rock" && computer == "rock" || player == "paper" && computer == "paper" || player == "scissors" && computer == "scissors")
        {
            if(deBug == true) console.log("player draw")
            return "draw";
        }
}


function whoWins(player, computer, result) {
    //make text pretty
    playerResult = makeTextPretty(player);
    //display results
    switch(result)
        {
            case "win": alert(playerResult + " vs " + computer + ": Congratulations, you win!!")
            if(deBug == true) console.log("player wins!!") 
            break;
            case "lose": alert(playerResult + " vs " + computer + ": Uh oh, you lose!!")
            if(deBug == true) console.log("player loses")
            break;
            case "draw": alert(playerResult + " vs " + computer + ": This is a draw.")
            if(deBug == true) console.log("This is a draw")
            break;
        }
}

function makeTextPretty(string) {
    //calculate text length
    stringLength = string.length;
    //calculate the rest of the word to cut
    toCut = 1 - stringLength
    if(deBug == true) console.groupCollapsed("Pretty Text");
    if(deBug == true) console.log("string is " + stringLength + " characters")
    if(deBug == true) console.log("I need to remove " + toCut + " characters")
    //slice first letter & rest of word
    letter = string.slice(0,1);
    text = string.slice(toCut);
    if(deBug == true) console.log("sliced " + letter + " from " + string + " leaving " + text);
    //make first letter upper case
    capitalised = letter.toUpperCase();
    if(deBug == true) console.log("turned " + letter + " to " + capitalised);
    //concate new first letter with the rest
    prettyWord = capitalised + text
    //return pretty text
    if(deBug == true) console.log(prettyWord);
    if(deBug == true) console.groupEnd("Pretty Text");
    return prettyWord;
}

function game() {
    //declare round number
    round = 1;
    playerScore = 0;
    computerScore = 0;
    //create loop to play 5 games
    for(round = 1; round <= 5; round++)
        {
            if(deBug == true) console.log("round " + round + " has started")
            playerChoice = playerSelection();
            //if valid choice
            if (!(playerChoice == null))
                {
                    //get choices
                    computerChoice = getComputerChoice();
                    combatResult = playRound(playerChoice,computerChoice);
                    //find out the winner
                    whoWins(playerChoice,computerChoice,combatResult);
                    if(deBug == true) console.log("round " + round + " result is " + combatResult)
                    if(combatResult == "win")
                        {
                            //if player wins, add to score
                            playerScore = playerScore + 1
                            computerScore = computerScore
                            if(deBug == true) console.log("Player won. Result now: Player: " + playerScore + " // Computer: " + computerScore)
                        }
                    else if(combatResult == "lose")
                        {
                            //if computer wins, add to score
                            playerScore = playerScore
                            computerScore = computerScore + 1
                            if(deBug == true) console.log("Player lost. Result now: Player: " + playerScore + " // Computer: " + computerScore)
                        }
                    //update player with score
                    alert("Player: " + playerScore + " vs Computer: " + computerScore);
                }
            else
            //if invalid choice
                {
                    if(deBug == true) console.log("round error, need to replay round " + round);
                    round--
                    if(deBug == true) console.log("round reset")
                }
            //if either player has won 3 rounds
            if (playerScore == 3 || computerScore == 3)
                {
                    //stop the game
                    round = 5;
                    //turn in final results
                    if(playerScore == 3)
                        {
                            alert("Well done, you are victorious!!");
                        }
                    else
                        {
                            alert("The computer has won. Better luck next time.");  
                        }
                }
            if(round == 5 && playerScore != 3 && computerScore != 3)
                {
                    if(playerScore > computerScore)
                        {
                            alert("Well done, you are victorious!!");  
                        }
                    else
                        {
                            alert("The computer has won. Better luck next time."); 
                        }
                }
        }
    //if they would like to play again
    let again = confirm("Would you like to play again?");

    if(again == true)
        {
            game();
        }
}

game();