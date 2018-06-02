// initial values

let min = 1;
let  max = 8;
let winningNum = 4;
let guessLeft = 3;

// UI elements

const userInput = document.querySelector('#guess-input'),
      userButton = document.querySelector('#guessBtn'),
      message = document.querySelector('.message'),
      minSpan = document.querySelector('.min-num'),
      maxSpan = document.querySelector('.max-num');

// setting min and max in UI      
minSpan.textContent = min;
maxSpan.textContent = max;      

userButton.addEventListener('click', function(e){
    let guess = parseInt(userInput.value);

    // if the number is bigger than the range
     if (isNaN(guess) || guess > max || guess < min){
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
        return;
    }

    // if user won
    if (guess === winningNum){
        gameOver(true, `${winningNum} is correct, YOU WON!`);
    }
    else{
        // still has tries to go
        if (guessLeft > 0 ){
            guessLeft--;
            userInput.style.borderColor = 'red';
            userInput.value = '';
            setMessage(`${guess} is incorrect, ${guessLeft} guesses left`,'red');
        }
        // game over
        else{
           gameOver(false, 'Game over'); 
        }
    }
});

// set message and color
function gameOver(won, msg){
    let color;
     won === true ? color = 'green' : color = 'red';

    userInput.disabled = true;
    userInput.style.borderColor = color;
    setMessage(msg, color);    
}

// set message nd message color
function setMessage(messageStr, color){
    message.textContent = messageStr;
    message.style.color = color;
}


