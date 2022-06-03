const btnContainer = document.querySelector('.container');
const cards = document.querySelectorAll('.card');
const cardsArr = Array.from(cards);

btnContainer.addEventListener('click', event => {
  const buttonId = event.target.closest('.btn');
  if (!buttonId) return;
  else {
    cards.forEach(card => {
      card.classList.toggle('card-hidden');
    });
    console.log(buttonId.innerHTML);
  }
});
