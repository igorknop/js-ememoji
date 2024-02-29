const EMOJIS = [
  '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼',
  '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼',
];
let openedCards = [];

let shuffledEmojis = shuffle(EMOJIS);

const game = document.querySelector('#game');
const buttons = document.querySelectorAll('button');
const dialog = document.querySelector('dialog');
console.log(dialog);
dialog.close();
buttons[0].addEventListener('click', resetState);
buttons[1].addEventListener('click', resetState);

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createItens() {
  shuffledEmojis = shuffle(EMOJIS);
  for (let i = 0; i < shuffledEmojis.length; i++) {
    const item = document.createElement('div');
    item.classList.add('item');
    item.dataset.emoji = shuffledEmojis[i];
    item.textContent = shuffledEmojis[i];
    item.addEventListener('click', handleClick);
    game.appendChild(item);
  }
}

function handleClick(e) {
  if (openedCards.length < 2) {
    this.classList.add('opened');
    openedCards.push(this);
  }
  if (openedCards.length === 2) {
    setTimeout(checkIfIsSame, 500);
  }
}

function checkIfIsSame() {
  if (openedCards[0].dataset.emoji === openedCards[1].dataset.emoji) {
    openedCards[0].classList.add('matched');
    openedCards[1].classList.add('matched');
    openedCards = [];
  } else {
    openedCards[0].classList.remove('opened');
    openedCards[1].classList.remove('opened');
    openedCards = [];
  }
  if (document.querySelectorAll('.matched').length === EMOJIS.length) {
    dialog.showModal();
  }
}

function resetState() {
  dialog.close();
  openedCards = [];
  game.innerHTML = '';
  createItens();
}
