import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '/node_modules/flatpickr/dist/flatpickr.min.css';

const startBtnRef = document.querySelector('button[data-start]');
let timeinterval;
let date;
startBtnRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] > new Date()) {
      startBtnRef.disabled = false;
    } else {
      Notify.failure('Please choose a date in the future');
    }
    date = selectedDates[0];
  },
};

flatpickr('#datetime-picker', options);

const clock = document.querySelector('.timer');
const daysSpan = clock.querySelector('span[data-days]');
const hoursSpan = clock.querySelector('span[data-hours]');
const minutesSpan = clock.querySelector('span[data-minutes]');
const secondsSpan = clock.querySelector('span[data-seconds]');

function addLeadinfZero(value) {
  return String(value).padStart(2, 0);
}

function initializeClock(date) {
  updateClock(date);
  timeinterval = setInterval(() => updateClock(date), 1000);
}

startBtnRef.addEventListener('click', () => {
  startBtnRef.disabled = true;
  initializeClock(date);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateClock(date) {
  const time = convertMs(Date.parse(date) - Date.parse(new Date()));
  console.log(time);

  daysSpan.innerHTML = addLeadinfZero(time.days);
  hoursSpan.innerHTML = addLeadinfZero(time.hours);
  minutesSpan.innerHTML = addLeadinfZero(time.minutes);
  secondsSpan.innerHTML = addLeadinfZero(time.seconds);

  if (Date.parse(date) - Date.parse(new Date()) <= 0) {
    clearInterval(timeinterval);
    Notify.success('Time is over!');
  }
}
