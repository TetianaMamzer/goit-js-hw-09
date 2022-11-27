
const refs = {
  btStart: document.querySelector('[data-start]'),
  btStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body')
}

let timerId = null;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

refs.btStart.addEventListener('click', () => {
  timerId = setInterval(() => {
 refs.body.style.backgroundColor = getRandomHexColor();
 refs.btStart.setAttribute('disabled', true);
 refs.btStop.removeAttribute('disabled');
}, 1000)
 });

refs.btStop.addEventListener('click', () => {
  clearInterval(timerId);
  refs.btStart.removeAttribute('disabled');
  refs.btStop.setAttribute('disabled', true);
})
