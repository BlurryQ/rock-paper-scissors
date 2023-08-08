let deBug = false;

    if(deBug == true) console.log("JS is running");

//create a random number for computer choice
function getNumber(n) 
    {
        randomNumber = Math.floor(Math.random() * n);
            if(deBug == true) console.log("I have generated " + randomNumber);
        return randomNumber;
    }


//use random number to create choice
function getComputerChoice() 
    {
        let x = getNumber(3);
        switch(x)
            {
                case 0: choice = "rock"
                            if(deBug == true) console.log("I have chosen " + choice);
                        return choice;
                        break;
                case 1: choice = "paper"
                            if(deBug == true) console.log("I have chosen " + choice);
                        return choice;
                        break;
                case 2: choice = "scissors"
                            if(deBug == true) console.log("I have chosen " + choice);
                        return choice;
                        break;
            }
    }


function getPlayerChoice() 
    {
        let enterChoice = prompt("Choose wisely: Rock, paper or scissors");
        let choiceLowercase = enterChoice.toLowerCase();
            if(deBug == true) console.log("Player has chosen " + choiceLowercase);
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


//give instruction on what denotes which outcome
function playRound (player, computer) 
    {
            if(deBug == true) console.log((player + " vs " + computer))
        if(player == "rock" && computer == "scissors" || player == "paper" && computer == "rock" || player == "scissors" && computer == "paper")
            {
                    if(deBug == true) console.log("player wins")
                return "win";
            }
        else if(player == "rock" && computer == "paper" || player == "paper" && computer == "scissors" || player == "scissors" && computer == "rock")
            {
                    if(deBug == true) console.log("player loses")
                return "lose";
            }
        else if(player == "rock" && computer == "rock" || player == "paper" && computer == "paper" || player == "scissors" && computer == "scissors")
            {
                    if(deBug == true) console.log("player draw")
                return "draw";
            }
    }


function alertRoundResult(player, computer, result) 
    {
        let playerResult = capitaliseFirstLetter(player);
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

function capitaliseFirstLetter(string) 
    {
        //calculate text length so it slices correctly for both first letter and remainder of string
        let stringLength = string.length;
        let lengthToCut = 1 - stringLength
            if(deBug == true) console.groupCollapsed("Pretty Text");
            if(deBug == true) console.log("string is " + stringLength + " characters")
            if(deBug == true) console.log("I need to remove " + lengthToCut + " characters")
        let firstLetter = string.slice(0,1);
        let remainingString = string.slice(lengthToCut);
            if(deBug == true) console.log("sliced " + firstLetter + " from " + string + " leaving " + remainingString);
        let capitalised = firstLetter.toUpperCase();
            if(deBug == true) console.log("turned " + firstLetter + " to " + capitalised);
        let prettyWord = capitalised + remainingString
            if(deBug == true) console.log(prettyWord);
            if(deBug == true) console.groupEnd("Pretty Text");
        return prettyWord;
    }

function game() 
    {
        //declare round number & scores
        let round = 1;
        let playerScore = 0;
        let computerScore = 0;
        //create loop to play 5 games
        for(round = 1; round <= 5; round++)
            {
                    if(deBug == true) console.log("round " + round + " has started")
                let playerChoice = getPlayerChoice();
                //check player choice is valid
                if (!(playerChoice == null))
                    {
                        let computerChoice = getComputerChoice();
                        let roundResult = playRound(playerChoice,computerChoice);
                        alertRoundResult(playerChoice,computerChoice,roundResult);
                            if(deBug == true) console.log("round " + round + " result is " + roundResult)
                        if(roundResult == "win")
                            {
                                //if player wins, add to score
                                playerScore = playerScore + 1
                                computerScore = computerScore
                                    if(deBug == true) console.log("Player won. Result now: Player: " + playerScore + " // Computer: " + computerScore)
                            }
                        else if(roundResult == "lose")
                            {
                                //if computer wins, add to score
                                playerScore = playerScore
                                computerScore = computerScore + 1
                                    if(deBug == true) console.log("Player lost. Result now: Player: " + playerScore + " // Computer: " + computerScore)
                            }
                        //update player with score
                        alert("Round " + round + " results are: Player: " + playerScore + " vs Computer: " + computerScore);
                    }
                else
                    {
                            if(deBug == true) console.log("round error, need to replay round " + round);
                        round--
                            if(deBug == true) console.log("round reset")
                    }
                //if either player has won 3 rounds (best of 5) we want to stop the game
                if (playerScore == 3 || computerScore == 3)
                    {
                        round = 5;
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