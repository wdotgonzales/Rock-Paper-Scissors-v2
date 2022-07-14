function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function computerPlay(){
  const choicesuserScoreArr = ['Rock','Paper','Scissors'];

  let randomNum = randomIntFromInterval(0,choicesuserScoreArr.length - 1);

  return choicesuserScoreArr[randomNum];
}



function playRound(playerSelection, computerSelection){
  if(playerSelection.toUpperCase() === 'ROCK' && computerSelection == 'Rock'){
    return "It's a tie!";
  } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection == 'Rock'){
    return "You Win! Paper beats Rock.";
  } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection == 'Rock'){
    return "You Lose! Scissors loses to Rock.";
  } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection == 'Paper'){
    return "You Lose! Scissors loses to Rock.";
  } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection == 'Paper'){
    return "You Lose! Scissors loses to Rock.";
  } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection == 'Paper'){
    return "You Win! Scissors beats Paper.";
  } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection == 'Scissors'){
    return "You Win! Rock beats Scissors.";
  } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection == 'Scissors'){
    return "You Win! Rock beats Scissors.";
  } else if (playerSelection.toUpperCase() ===   'SCISSORS' && computerSelection == 'Scissors'){
    return "You Win! Rock beats Scissors.";
  }
}


const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');

const showRoundResult = document.createElement('h3');
const maincontainer = document.querySelector('.main-container');
maincontainer.append(showRoundResult);

showRoundResult.style.marginTop = '3em'

let roundResult;




let userScoreArr = [];
let computerScoreArr = [];

const userScoreMessage = document.createElement('h3');
maincontainer.append(userScoreMessage);

const computerScoreMessage = document.createElement('h3');
maincontainer.append(computerScoreMessage);

const resultGameMessage = document.createElement('h1');
maincontainer.append(resultGameMessage);

function game(roundResult){
  if(roundResult.includes('Win')){
    userScoreArr.push(1);
    const total = userScoreArr.reduce(sum = (prev,current) => {
      return prev + current;
    })
  
    // console.log(total + " user")
    userScoreMessage.innerText = 'Your Score : ' + total;
    

    if(total == 5){
      // console.log('You won the game!')
      resultGameMessage.innerText = "You won the game!"
      userScoreMessage.innerText = 'Your Score : ' + total;
      button1.disabled = 'true';
      button2.disabled = 'true';
      button3.disabled = 'true';
    }



  } else if(roundResult.includes('Lose')){
    computerScoreArr.push(1);
    const total = computerScoreArr.reduce(sum = (prev,current) => {
      return prev + current;
    })

    // console.log(total + " computer");
    computerScoreMessage.innerText = 'Computer Score : ' + total;


    if(total == 5){
      // console.log('You lost the game!')
      resultGameMessage.innerText = 'You lost the game.'
      computerScoreMessage.innerText = 'Computer Score : ' + total;
      button1.disabled = 'true';
      button2.disabled = 'true';
      button3.disabled = 'true';
      
    }

  }
}

const reset = document.createElement('a');
maincontainer.append(reset);
reset.style.borderRadius = '13px'


let x = 1;

button1.addEventListener('click',() => {
  roundResult =  playRound('Paper',computerPlay());
  showRoundResult.innerText = "Round " + (x++) +" : "+ roundResult;
  game(roundResult);

  reset.style.textDecoration = 'none';
  reset.style.fontWeight = 'bold'
  reset.style.color = 'white'
  reset.style.backgroundColor = 'purple'
  reset.style.paddingInline = '2em'
  reset.style.paddingBlock = '0.5em'
  reset.style.border = 'white 2px solid'
  reset.innerText = 'Click here to play again';
  reset.style.fontWeight = 'bolder'
  reset.href = 'index.html'

});
button2.addEventListener('click',() => {
  const roundResult =  playRound('Rock',computerPlay());
  showRoundResult.innerText = "Round " + (x++) +" : "+ roundResult;
  game(roundResult);

  reset.style.textDecoration = 'none';
  reset.style.fontWeight = 'bold'
  reset.style.color = 'white'
  reset.style.backgroundColor = 'purple'
  reset.style.paddingInline = '2em'
  reset.style.paddingBlock = '0.5em'
  reset.style.border = 'white 2px solid'
  reset.innerText = 'Click here to play again';
  reset.href = 'index.html'
});

button3.addEventListener('click',() => {
  const roundResult =  playRound('Scissors',computerPlay());
  showRoundResult.innerText = "Round " + (x++) +" : "+ roundResult;
  game(roundResult);

  reset.style.textDecoration = 'none';
  reset.style.fontWeight = 'bold'
  reset.style.color = 'white'
  reset.style.backgroundColor = 'purple'
  reset.style.paddingInline = '2em'
  reset.style.paddingBlock = '0.5em'
  reset.style.border = 'white 2px solid'
  reset.innerText = 'Click here to play again';
  reset.href = 'index.html'
});