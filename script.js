const buttons = document.querySelectorAll('.btn');

console.log(buttons);

buttons.forEach(el =>
  el.addEventListener('click', () => {
    console.log('Button works');
  })
);
