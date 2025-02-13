/*-- constants --*/

const opt = {
    1: 'rock',
    2: 'paper',
    3: 'scissors',
    4: 'lizard',
    5: 'spock'
}

/*-- cached elements --*/

const computerOpt = document.getElementById('computer-opt');

const playerOpt = document.querySelector('.player-btns');

const result = document.getElementById('result');

const reset = document.getElementById('reset');


/*-- event listeners --*/

playerOpt.addEventListener('click', (event) => {
    let playerChoice = event.target.id;
    // console.log(playerChoice);

    let comptuerChoice = getComputerChoice();
    // console.log(comptuerChoice);

    getWinner(playerChoice, comptuerChoice);
});

reset.addEventListener('click', resetRPS);

/*-- functions --*/

function getComputerChoice() {
    let randomOptIndex = Math.floor(Math.random() * Object.keys(opt).length) + 1;
    let computerChoice = computerOpt.innerText = opt[randomOptIndex];
    // console.log(computerChoice);
    return computerChoice;
};

function getWinner(playerChoice, computerChoice) {
    // if playerChoice === computerChoice --> tie
    // if playerChoice === rock && computerChoice === scissors || lizard --> player wins
    // if playerChoice === paper && computerChoice === rock || spock --> player wins
    // if playerChoice === scissors && computerChoice === paper || lizard --> player wins
    // if playerChoice === lizard && computerChoice === spock || paper --> player wins
    // if playerChoice === spock && computerChoice === scissors || rock --> player wins
    // else computer wins

    if (playerChoice === computerChoice) {
        result.innerText = 'tie.';
    } else if (playerChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) {
        result.innerText = 'player wins.';
    } else if (playerChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) {
        result.innerText = 'player wins.';
    } else if (playerChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) {
        result.innerText = 'player wins.';
    } else if (playerChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) {
        result.innerText = 'player wins.';
    } else if (playerChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock')) {
        result.innerText = 'player wins.';
    } else {
        result.innerText = 'computer wins.';    
    }
};

function resetRPS() {
    computerOpt.style.display = 'none';
    result.innerHTML = '';
};

// 6. reset game
// icebox --> timer 
// icebox --> score board