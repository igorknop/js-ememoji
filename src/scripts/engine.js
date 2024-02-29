const EMOJIS = [
  '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼',
  '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼',
];
let openedCards = [];

let shuffledEmojis = shuffle(EMOJIS);


function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

for(let i=0; i<shuffledEmojis.length; i++) {
  const item = document.createElement('div');
  item.classList.add('item');
  item.dataset.emoji = shuffledEmojis[i];
  item.textContent = shuffledEmojis[i];
  item.addEventListener('click', handleClick);
  document.querySelector('.game').appendChild(item);
}

function handleClick(e) {
  if(openedCards.length < 2) {
    this.classList.add('opened');
    openedCards.push(this);
  }
  if (openedCards.length === 2) {
    setTimeout(checkIfIsSame, 500);
  }
}

function checkIfIsSame(){
  if(openedCards[0].dataset.emoji === openedCards[1].dataset.emoji) {
    openedCards[0].classList.add('matched');
    openedCards[1].classList.add('matched');
    openedCards = [];
  } else {
    openedCards[0].classList.remove('opened');
    openedCards[1].classList.remove('opened');
    openedCards = [];
  }
  if(document.querySelectorAll('.matched').length === EMOJIS.length) {
    alert('You win!');
  }
}