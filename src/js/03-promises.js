import Notiflix from 'notiflix';

const refs = {
  submit: document.querySelector('.form'),
  delayForm: document.querySelector('input[name="delay"]'),
  stepForm: document.querySelector('input[name="step"]'),
  amountForm:  document.querySelector('input[name="amount"]')
};
refs.submit.addEventListener('submit', onSubmite);
refs.delayForm.addEventListener('input', onDelayForm);
refs.stepForm.addEventListener('input', onStepForm);
refs.amountForm.addEventListener('input', onAmountForm);


const check = {};

function onDelayForm(e) {
const delay = Number(e.target.value);
check.delay = delay;
};

function onStepForm(e) {
  const step = Number(e.target.value);
  check.step = step;
};

function onAmountForm(e) {
  const amount = Number(e.target.value);
  check.amount = amount;
};


function onSubmite(e) {
e.preventDefault();
let position = 0;
let delay = check.delay;
const stepCheck = check.step;

for (let i = 0; i < check.amount; i += 1) {
  position += 1;
  delay += stepCheck;
  console.log(delay)
createPromise(position, delay);
e.currentTarget.reset();
}
}


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
}).then(({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay }) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
});
}



