const startBtnRef = document.querySelector('button[data-start]');
const body = document.querySelector('body');
let timeInterval = null;

startBtnRef.addEventListener('click', () => {
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
  console.log('Button was clicked');
  timeInterval = setInterval(() => {
    console.log(getRandomHexColor());
    const bodyColor = getRandomHexColor();
    body.style.backgroundColor = bodyColor;
  }, 1000);
});

const stopBtnRef = document.querySelector('button[data-stop]');
stopBtnRef.addEventListener('click', () => {
  stopBtnRef.disabled = true;
  startBtnRef.disabled = false;
  console.log('Button was clicked');
  clearInterval(timeInterval);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
