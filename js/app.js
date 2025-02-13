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


/*-- event listeners --*/

playerOpt.addEventListener('click', (event) => {
    let playerChoice = event.target.id;
    console.log(playerChoice);
});

/*-- functions --*/

init(); 

function init() {
    getComputerChoice();
};

function getComputerChoice() {
    let randomOptIndex = Math.floor(Math.random() * Object.keys(opt).length) + 1;
    let computerChoice = computerOpt.innerText = opt[randomOptIndex];
    console.log(computerChoice);
};


// 2. get user to be able to select a option 
// 3. compare the two options
// 4. select winner 
// 5. display winner
// 6. reset game
// icebox --> timer 
// icebox --> score board