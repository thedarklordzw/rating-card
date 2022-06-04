const btnContainer = document.querySelector('.container');
const cards = document.querySelectorAll('.card');

const cardsArr = Array.from(cards);
const buttonsEl = document.querySelectorAll('.btn');
const buttonsElArr = Array.from(buttonsEl);
const numButtons = buttonsElArr.length;

btnContainer.addEventListener('click', event => {
  const buttonId = event.target.closest('.btn').innerHTML;

  if (!buttonId) return;
  else {
    const result = buttonsElArr.at(Number(buttonId) - 1);
    buttonsElArr.forEach(element => element.classList.remove('btn--clicked'));
    result.classList.toggle('btn--clicked');
  }
});
