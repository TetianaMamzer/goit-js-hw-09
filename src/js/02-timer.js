import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector("button"),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]')
};

let timer = null;
refs.button.addEventListener('click', chooseDate);


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timer = selectedDates[0].getTime();
    console.log(timer)
     }
};


const fp = flatpickr('#datetime-picker', options);

function chooseDate() {
  console.log(timer)
  
  const currentTime = Date.now();
  if ((timer - currentTime) < 0) {
    Notiflix.Notify.failure("Please choose a date in the future");
    return;
  } 
  const intervalId = setInterval(() => {
    const current = Date.now();
    const time = timer - current;

    if (time >= 0 ) {
      refs.button.setAttribute('disabled', true);
    convertMs(time);
    const { days, hours, minutes, seconds } = convertMs(time);
    getTimer({ days, hours, minutes, seconds });
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
  
  
};
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function getTimer({ days, hours, minutes, seconds }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}