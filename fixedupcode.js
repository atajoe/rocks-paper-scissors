let player_score = 0;
let computer_score = 0;



function computerPlay(){
    let computer_choices = ["rock","paper","scissors"]
    let final_result = computer_choices[Math.floor(Math.random()*computer_choices.length)]
    return final_result
}


function playRound(playerSelection){
    let playerSelection_answer = playerSelection.toLowerCase();
    let computerSelection = computerPlay()
    let answer = ''
    console.log(`Computer selected: ${computerSelection}`)
    console.log(`Player selected: ${playerSelection_answer}`)
    
    if (playerSelection_answer === 'rock'){
        if (computerSelection === 'paper'){
            answer =  'Computer wins!'
        } else if (computerSelection === 'scissors'){
            answer = 'You win!'
        } else {
            answer = 'You tied!'
        }
    }

    if (playerSelection_answer === 'scissors'){
        if (computerSelection === 'paper'){
            answer =  'You win!'
        }
        if (computerSelection === 'rock'){
            answer =  'Computer wins!'
        }
        else{
            answer =  'You tied!'
        }
    }

    if (playerSelection_answer === 'paper'){
        if (computerSelection === 'scissors'){
            answer =  'Computer wins!'
        } else if (computerSelection === 'rock'){
            answer =  'You win!'
        }
        else{
            answer =  'You tied!'
        }
    }
    return answer;

    

}


function game(){
    let playerSelection = prompt('Pick a weapon')
    let round_winner = playRound(playerSelection)
    let deciding_factor = ['You win!', 'Computer wins!', 'You tied!']
    if (round_winner === deciding_factor[0]){
        player_score++;
    } else if (round_winner === deciding_factor[1]){
        computer_score++;
    }else{
        console.log('Tied. No winner.')
    }
    updateWinner()
}

function updateWinner(){
    if (player_score > computer_score){
        return `Player is the winner! Player's points are ${player_score}`
    } else if (computer_score > player_score){
        return `Computer is the winner! Computer's points are ${computer_score}`
    } else{
        return 'Tied. No winner.'
    }
}


