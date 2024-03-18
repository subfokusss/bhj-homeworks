const getHole = (index) => document.getElementById(`hole${index}`);
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let wins = 0;
let losses = 0;

const updateScore = () => {
  deadCounter.textContent = wins;
  lostCounter.textContent = losses;
};

const checkForMole = (event) => {
  const hole = event.target;

  if (hole.classList.contains('hole_has-mole')) {
    wins++;
    updateScore();

    if (wins === 10) {
      alert('Вы победили!');
      resetGame();
    }
  } else {
    losses++;
    updateScore();

    if (losses === 5) {
      alert('Вы проиграли!');
      resetGame();
    }
  }
};

const resetGame = () => {
  wins = 0;
  losses = 0;
  updateScore();
};

for (let i = 1; i <= 9; i++) {
  getHole(i).addEventListener('click', checkForMole);
}

resetGame();