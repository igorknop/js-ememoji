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
  if (openedCards === 2) {
    setTimeout(() => {}, 500);
  }
}