'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const settingScore = score => {
  document.querySelector('.score').textContent = score;
};

///////////////////////////////////
// CHECK BUTTON

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  // WHEN INPUT IS EMPTY
  if (!guess) {
    displayMessage('⛔ No Number!');

    // WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // IMPLEMENTING HIGHSCORE
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too low!');

      score--;
      settingScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      settingScore(0);
    }
  }
});

///////////////////////////////////
// AGAIN BUTTON

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing...');
  settingScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
