let i=5;
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
        showResult(result, 1);
        i--;
        }
        else{
            showScoreBoard('block');
        }
    })
})


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
        return 'You win!';
    }else if(pcChoosed === humanChoosed){
        return 'Tied';
    }else{
        return 'Computer Wins!';
    }
}

function showScoreBoard(display){
    let scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.style.display = display;
}