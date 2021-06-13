'use strict';
window.alert(
  'You need to guess the hidden number between 1 and 20. You have 10 chances to find instanceof. On the right side you have infos about how close you are to find it'
);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function testing() {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔ Please write a Number');
    // When palyer wins
  } else if (guess === secretNumber) {
    displayMessage(
      '✌ Correct Number. Press Play Again! to improve your Highscore!!!'
    );
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '📈 Greater than the one we are looking for'
          : '📉 Smaller than the one we are looking for'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😢 You Lost!!!');
      document.querySelector('body').style.backgroundColor = 'Red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Ξεκίνα να μαντεύεις...');
  document.querySelector('.number').textContent = '?';
});
