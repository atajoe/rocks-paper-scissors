
let player_score = 0;
let computer_score = 0;
let round_counter = 0;

const messageannounce = document.querySelector('.game-announce')
const playerscorebox = document.querySelector('#player-score-box')
const computerscorebox = document.querySelector('#computer-score-box')
const roundannounce = document.querySelector('.round-announce')
const weaponannounce = document.querySelector('.weapon-announce')
const playagainbtn = document.querySelector('.playagain')
const rockbtn = document.querySelector('.card-rock')
const paperbtn = document.querySelector('.card-paper')
const scissorsbtn = document.querySelector('.card-scissors')


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
    weaponannounce.textContent = `You chose ${playerSelection_answer}. Computer chose ${computerSelection}`
    
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


function game(answer){
    
        let playerSelection = answer
        let round_winner = playRound(playerSelection)
        let deciding_factor = ['You win!', 'Computer wins!', 'You tied!']
        if (round_winner === deciding_factor[0]){
            player_score += 1;
            round_counter += 1;
            playerscorebox.textContent = `${player_score}`
            console.log(`Player points: ${player_score}. Computer points: ${computer_score}`)
            roundannounce.textContent = `Round ${round_counter}. Player wins! - Player points: ${player_score}. Computer points: ${computer_score}`
        } else if (round_winner === deciding_factor[1]){
            computer_score += 1;
            round_counter += 1;
            computerscorebox.textContent = `${computer_score}`
            console.log(`Player points: ${player_score}. Computer points: ${computer_score}`)
            roundannounce.textContent = `Round ${round_counter}. Computer wins! - Player points: ${player_score}. Computer points: ${computer_score}`
        }else if (round_winner === deciding_factor[2]){
            console.log('No winner - tied.')
            round_counter += 1;
            console.log(`Player points: ${player_score}. Computer points: ${computer_score}`)
            roundannounce.textContent = `Round ${round_counter}. No winner! Tied! - Player points: ${player_score}. Computer points: ${computer_score}`
        }
        
        if (player_score === 5 || computer_score === 5 || round_counter === 5){
            get_final_winner()
            disable()
            playagainbtn.style.visibility = 'visible'
            playAgain()


        }
        
    
}


function get_final_winner(){
    if (player_score > computer_score){
        messageannounce.textContent= `Player is the winner! Player's points are ${player_score}. Computer's points are ${computer_score}`
    } else if (computer_score > player_score){
        messageannounce.textContent= `Computer is the winner! Computer's points are ${computer_score}. Player's points are ${player_score}`
    } else{
        messageannounce.textContent= 'Tied. No winner.'
    }
}

function playAgain(){
    playagainbtn.addEventListener('click', (e) =>{
        location.reload()
    })
}


function disable(){
    rockbtn.style["pointer-events"] = "none";
    paperbtn.style["pointer-events"] = "none";
    scissorsbtn.style["pointer-events"] = "none";
}



// Event Listeners
rockbtn.addEventListener('click', (e) =>{
    let random_variable = (e.target.alt)
    game(random_variable)
    
    
});

paperbtn.addEventListener('click', (e) =>{
    let random_variable = (e.target.alt)
    game(random_variable)
    
});

scissorsbtn.addEventListener('click', (e)=>{
    let random_variable = (e.target.alt)
    game(random_variable)
    
});


