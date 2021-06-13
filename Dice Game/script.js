'use strict';
alert(
  'In this Game we have two Players and the winner is the one that will reach 100 point in total. Each player can throw the Dice as many times as he wants but if he throw 1 or 6 he loses the points that he did not keep and loses his turn. Use the button Keep the points oft so you do not lose your points.'
);
// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('#score--0');
const score1El = document.getElementById('#score--1');
const current0El = document.getElementById('#current--0');
const current1El = document.getElementById('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
// Starting conditions
diceEl.classList.add('hidden');
let playing = true;

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2 Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1
    if (dice !== 1 && dice !== 6) {
      // Add dice to current score
      currentScore += dice;
      console.log(dice);
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Check if players score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish Game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      alert(`Player ${activePlayer + 1} has won!!!`);
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  if (!playing) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
  } else {
    diceEl.classList.add('hidden');
  }
  score0El.textContent = '0';
  score1El.textContent = '0';
  current0El.textContent = '0';
  current1El.textContent = '0';
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  playing = true;
});
