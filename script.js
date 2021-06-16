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
            return `Player: ${playerSelection} || Computer: ${computerSelection} => You Lose!`
        } else if (computerSelection == "rock"){
            return "Its a tie! Please go Again"
        } else {
            return `Player: ${playerSelection} || Computer: ${computerSelection} => You Win!`
        }
    } else if (playerSelection == "paper"){
        if(computerSelection == "scissors"){
            return `Player: ${playerSelection} || Computer: ${computerSelection} => You Lose!`
        } else if (computerSelection == "paper"){
            return "Its a tie! Please go Again"
        } else {
            return `Player: ${playerSelection} || Computer: ${computerSelection} => You Win!`
        }
    } else if (playerSelection == "scissors") {
        if(computerSelection == "rock"){
            return `Player: ${playerSelection} || Computer: ${computerSelection} => You Lose!`
        } else if (computerSelection == "scissors"){
            return "Its a tie! Please go Again"
        } else {
            return `Player: ${playerSelection} || Computer: ${computerSelection} => You Win!`
        }
    } else {
        return "Error: Please pick rock, paper or scissors"
    }
}

let wins = 0
let losses = 0

let gameOver = false;

window.addEventListener('keyup', function (e) {
    if (gameOver == true){
        return
    }    
    
    let choice = ''

    if (e.key === 'r' || e.key === '1'){
        choice = 'rock'
    } else if (e.key === 'p' || e.key === '2'){
        choice = 'paper'
    } else if (e.key === 's' || e.key === '3') {
        choice = 'scissors'
    } else {
        return
    }

    let outcome = singleRound(choice, computerPlay())
    
    updateScoreBoard(outcome);

})

const options = document.querySelectorAll('.playerOption')

options.forEach(key => key.addEventListener('click', makeChoice));

function makeChoice (e) {

    console.log(this)
    let choice = this.id

    let outcome = singleRound(choice, computerPlay())
    
    updateScoreBoard(outcome);
}

function logOutcome (string) {
    const log = document.querySelector('.log')
    const newDiv = document.createElement('div')

    newDiv.textContent = string
    newDiv.classList.add('logEntry')

    console.log(newDiv)

    log.appendChild(newDiv)

}

function resetGame () {
    document.querySelector('#player-score').textContent = 0
    document.querySelector('#comp-score').textContent = 0
    document.querySelector('.score').classList.remove('win')
    document.querySelector('.score').classList.remove('loss')

    const log = document.querySelector('.log')

    while (log.lastElementChild != log.firstElementChild) {
        log.removeChild(log.lastElementChild)
    }

    wins = 0
    losses = 0

    gameOver = false;

    document.querySelector('.resetBtn').remove();
    document.querySelector('.declareWinner').remove();
}

function createResetButton () {
    const btn = document.createElement('btn')
    const score = document.querySelector('.score')

    btn.textContent = 'Reset'

    btn.classList.add('resetBtn', 'btn-primary', 'btn', 'm-2')

    btn.addEventListener('click', function () {
        resetGame ();
    })
    
    score.append(btn)
}

function declareWinner (result) {
    const declare = document.createElement('div')
    const scoreBoard = document.querySelector('.score')

    declare.textContent = result;
    declare.classList.add('declareWinner', 'mt-3')

    scoreBoard.prepend(declare);

    createResetButton();

    gameOver = true;


}

function updateScoreBoard (outcome) {

    if (outcome.includes("You Win!")){
        wins++
        logOutcome(outcome);

        document.querySelector('.score').classList.add('win')
        document.querySelector('.score').classList.remove('loss')

    } else if (outcome.includes("You Lose!")) {
        losses++
        logOutcome(outcome);
        document.querySelector('.score').classList.remove('win')
        document.querySelector('.score').classList.add('loss')
    } else {
        logOutcome(outcome);
        document.querySelector('.score').classList.remove('win')
        document.querySelector('.score').classList.remove('loss')
    }

    //update scoreboard
    document.querySelector('#player-score').textContent = wins
    document.querySelector('#comp-score').textContent = losses

    //check for win
    if (wins >= 3){        
        declareWinner('You Win!')        
    } else if (losses >= 3) {        
        declareWinner('You Lose!')        
    }

}