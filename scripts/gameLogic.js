let i=5;
let playerWin=0, computerWin=0;
let buttons = document.querySelectorAll('button');


let lives = document.querySelector('#rounds p');

buttons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        //console.log(e.target.innerText);
        if(i>=1){
        lives.textContent = i;
        let result = '';
        let pcSelected = selectFromRandom();
        showPcSelected(pcSelected, 9);
        result = resultChecker(pcSelected, String(e.target.innerText).toLowerCase())
        //showResult(e.target.innerText, 9);
        if(result === 'You Win!'){
            playerWin +=1;
        }else if(result === 'Computer Win!'){
            computerWin +=1;
        }
        showResult(result, 1);
        i--;
        }
        else{
            showScoreBoard('block', playerWin, computerWin);
        }
    });
});


function showResult(text, opacity){
    let result = document.getElementById("matchResult");
    result.style.opacity = opacity;
    result.textContent = text;
}

function showPcSelected(text, opacity){
    let pcSelected = document.getElementById("pcSelected");
    pcSelected.style.opacity = opacity;
    pcSelected.textContent = `Computer choosed ${text}`;
}

function selectFromRandom(){
    let options = ['rock', 'paper', 'scissors'];
    let selected = Math.floor(Math.random()*3)+1;
    return options[selected-1];
}

function resultChecker(pcChoosed, humanChoosed){
    if(humanChoosed === 'rock' && pcChoosed === 'scissors'
    ||humanChoosed === 'paper' && pcChoosed === 'rock'
    ||humanChoosed === 'scissors' && pcChoosed === 'paper'){
        return 'You Win!';
    }else if(pcChoosed === humanChoosed){
        return 'Tied';
    }else{
        return 'Computer Win!';
    }
}

function showScoreBoard(display, playerScore, computerScore){
    let finalResult = ()=>{
        if(playerScore > computerScore){
            return 'Player Wins!';
        }else if(computerScore > playerScore){
            return 'Computer Wins!';
        }else{
            return 'Game Tie';
        }
    }
    let scoreDetails = document.querySelector('#scoreBoard p');
    scoreDetails.textContent = `Number of Matches: 5\n\nPlayer won ${playerScore} times\n\nComputer won ${computerScore} times\n\nGame Tied ${5-(playerScore+computerScore)} times`;
    let scoreMessage = document.querySelector('#scoreBoard h2');
    scoreMessage.textContent = `${finalResult()}`;
    let scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.style.display = display;
}

let tryAgain = document.querySelector('#scoreBoard button');
tryAgain.addEventListener('click', ()=>{
    window.location.reload();
});