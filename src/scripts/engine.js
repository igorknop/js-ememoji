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
  item.addEventListener('click', ()=>{});
  document.querySelector('.game').appendChild(item);
}