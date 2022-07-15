import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  const firstDelay = Number(delay.value);
  const delayStep = Number(step.value);
  const iter = Number(amount.value);

  console.log('Button was clicked');
  for (let i = 1; i <= iter; i += 1) {
    createPromise(i, firstDelay - delayStep + (delayStep * i))
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`, {
          timeout: 6000,
        });
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`Rejected promise ${position} in ${delay}ms`, {
          timeout: 6000,
        });
      });
  }
}
