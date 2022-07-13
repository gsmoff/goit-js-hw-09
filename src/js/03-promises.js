import { Notify } from 'notiflix/build/notiflix-notify-aio';
  const form = document.querySelector(".form");

  form.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { delay, step, amount },
    } = event.currentTarget;

    const firstDelay = Number(delay.value);
    const delayStep = Number(step.value);
    const iter = Number(amount.value);

    console.log('Button was clicked');

    const timerId = 0;
    let steps = firstDelay;
    let number = 1;

    setTimeout(() => {
      setInterval(() => {
        function createPromise(position, delay) {
          console.log(steps);
          steps += delayStep;
          console.log(number);
          number += 1;
          return new Promise((resolve, reject) => {
            const shouldResolve = Math.random() > 0.3;
            if (shouldResolve) {
              resolve({ position, delay });
            } else {
              reject({ position, delay });
            }
          });
        }
        if (number > iter) {
          return clearInterval(timerId);
        }

        createPromise(number, steps)
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
      }, delayStep);
    }, firstDelay);
  }

