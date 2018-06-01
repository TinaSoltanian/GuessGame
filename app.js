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

minSpan.textContent = min;
maxSpan.textContent = max;      

userButton.addEventListener('click', function(e){
    let guess = parseInt(userInput.value);

     if (isNaN(guess) || guess > max || guess < min){
        setMessage(`Please enter a number between ${min} and ${max}`,'red');
        return;
    }

    if (guess === winningNum){
        userInput.disabled = true;
        userInput.style.borderColor = 'green';
        setMessage(`${winningNum} is correct, YOU WON!`,'green');
    }
    else{
        if (guessLeft >0    ){
            guessLeft--;
            userInput.style.borderColor = 'red';
            userInput.value = '';
            setMessage(`${guess} is incorrect, ${guessLeft} guesses left`,'red');
        }
        else{
            userInput.disabled = true;
            setMessage(`Game over`,'red');
        }
    }
});

function setMessage(messageStr, color){
    message.textContent = messageStr;
    message.style.color = color;
}


