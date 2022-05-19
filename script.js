

const choices = ['rock', 'paper', 'scissors']

const playerChoice = prompt("Rock, Paper or Scissors?")

const fullList = document.body.querySelector('ul')
const roundGame = document.body.querySelector('.rounds')
const perRound = document.body.querySelector('.perRound')
const playerPick = document.body.querySelector('player-header')
const computerPick = document.body.querySelector('computer-header')
const playerTotalScore = document.body.querySelector('.playerTotal')
const computerTotalScore = document.body.querySelector('.computerTotal')
const winner = document.body.querySelector('.winner')


let computerScore = 0
let playerScore = 0
let currentRound = 0

function computerPlay(){

        return choices[Math.floor(Math.random()*3)] 
}



function playRound(playerSelection, computerSelection){
    player = playerSelection.toString().toLowerCase()
    computer = computerSelection.toLowerCase()
    currentRound++

    
    const listItem = document.createElement('li')
    const roundNow = document.createTextNode(`Round ${currentRound}`)
    const textItem = document.createTextNode(`Player: ${player}\n Computer: ${computer}`)
    const titleRound = document.createElement('h1')
    const h2Design = document.createElement('h2')

    h2Design.appendChild(textItem)
    listItem.appendChild(textItem)
   titleRound.appendChild(roundNow)
    

   fullList.appendChild(titleRound)
   fullList.appendChild(listItem)
    

    // const roundNow = perRound.textContent = `Round ${currentRound}`
    // const  = document.createTextNode(`Player: ${player}\n Computer: ${computer}`)

    // document.body.appendChild(roundNow)

    
    if(player == 'rock'){
        if(computer == 'scissors'){
            playerScore++;
            return "EZ WIN SHEESSHH!"
        }else if(computer == 'paper'){
            computerScore++
            return "COMPUTER WINS"
        }else{
            return "DRAW"
        }
    }else if(player =='scissors'){

        if(computer == 'paper'){
            playerScore++;
            return "EZ WIN SHEESSHH!"
        }else if(computer == 'rock'){
            computerScore++
            return "COMPUTER WINS"
        }else{
            return "DRAW"
        }
    }else if(player == "paper"){

        if(computer == 'rock'){
            playerScore++
            return "EZ WIN SHEESSHH!"
        }else if(computer == 'scissors'){
            computerScore++
            return "COMPUTER WINS"
        }else{
            return "DRAW"
        }
    }else{
        return "Invalid"
    }
}

function game(num){
    noOfRounds = `Number of rounds: ${num}`
    roundGame.textContent = noOfRounds
    for(let i = 1; i<=num; i++){
        console.log(playRound(playerChoice, computerPlay()))
        console.log('\n')
    } 

}

game(5)

playerTotalScore.innerHTML = `Total Score for Player: ${playerScore}`
computerTotalScore.innerHTML = `Total Score for Computer: ${computerScore}`

let result = playerScore > computerScore 


if(result){
    winner.innerHTML = "PLAYER WINS THE GAME"
}else{
    winner.innerHTML = "COMPUTER RULES!!!!"
}


