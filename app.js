// Amazing Game Start

var scores, roundScore, activePlayer, dice, gamePlaying;

init();

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (gamePlaying) {
    // 1. Random Number
    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // Update the round score If the rolled number was NOT a 1
    if (dice !== 1) {
      // roundScore = roundScore + dice;
      roundScore += dice;

      document.querySelector('#current--' + activePlayer).textContent =
        roundScore;
    } else {
      // Next Player
      nextPlayer();
    }
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (gamePlaying) {
    // Add current score to Global score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score--' + activePlayer).textContent =
      scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= 20) {
      document.querySelector('#name--' + activePlayer).textContent = 'winner!';
      document.querySelector('.dice').style.display = 'none';

      document
        .querySelector('.player--' + activePlayer)
        .classList.add('player--winner');

      document
        .querySelector('.player--' + activePlayer)
        .classList.remove('player--active');
      gamePlaying = false;
    } else {
      // Next Player
      nextPlayer();
    }
  }
});

function nextPlayer() {
  // Next Player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';

  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', function () {
  init();
});

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score--0').textContent = '0';
  document.getElementById('score--1').textContent = '0';
  document.getElementById('current--0').textContent = '0';
  document.getElementById('current--1').textContent = '0';

  document.getElementById('name--0').textContent = 'Player-1';
  document.getElementById('name--1').textContent = 'Player-2';

  // Remove player winner text color and bg color
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');

  // Remove active bg color
  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.remove('player--active');

  // Default active color position
  document.querySelector('.player--0').classList.add('player--active');
}

// document.querySelector('.player--0').classList.remove('player--active');
// document.querySelector('.player--1').classList.add('player--active');

// document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x = document.querySelector('#score--0').textContent;
// console.log(x);
