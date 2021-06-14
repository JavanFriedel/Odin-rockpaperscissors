function computerPlay () {
    let choice = Math.floor(Math.random() * 3) + 1

    if (choice == 1) {
        return "Rock"
    } else if (choice == 2){
        return 'Paper'
    } else {
        return "Scissors"
    }
}

function singleRound (playerSelection, computerSelection) {
    //Create eqaullity selector to see who won the game.

    // take player selector and compare it for a tie

    // take player selection and compare against losing match up and winning match up 
    playerSelection = playerSelection.toLowerCase()

    computerSelection = computerSelection.toLowerCase()


    if (playerSelection == "rock") {
        if(computerSelection == "paper"){
            return "You Lose! Paper beats Rock"
        } else if (computerSelection == "rock"){
            return "Its a tie! Please go Again"
        } else {
            return "You win! Rock beats Scissors"
        }
    } else if (playerSelection == "paper"){
        if(computerSelection == "scissors"){
            return "You Lose! Scissors beats Paper"
        } else if (computerSelection == "paper"){
            return "Its a tie! Please go Again"
        } else {
            return "You win! Paper beats Rock"
        }
    } else if (playerSelection == "scissors") {
        if(computerSelection == "rock"){
            return "You Lose! Rock beats Scissors"
        } else if (computerSelection == "scissors"){
            return "Its a tie! Please go Again"
        } else {
            return "You win! Scissors beats paper"
        }
    } else {
        return "Error: Please pick rock, paper or scissors"
    }
}

function game() {

    let wins = 0

    let losses = 0
    
    for(let i = 0; i < 5; i++) {
        let playerInput = prompt("Rock, Paper or Scissors?")
        let outcome = singleRound(playerInput, computerPlay())

        if (outcome.includes("You win!")){
            wins++
        } else if (outcome.includes("You Lose!")) {
            losses++
        } else {
            i--;
        }

        console.log(outcome + " Current Score: " + wins + " Wins, " + losses + " losses")
        
        if (wins >= 3 || losses >= 3){
            break;
        }
    }
    
    if (wins > losses) {
        console.log("You won a best of 5 against the computer!")
    } else {
        console.log("The computer wins the best of 5!")
    }   

}

game();