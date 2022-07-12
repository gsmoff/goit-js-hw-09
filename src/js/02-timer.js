import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
};
flatpickr("#datetime-picker", options);

const startBtnRef = document.querySelector('button[data-start]');
startBtnRef.disabled = true;
const textInput = document.querySelector("#datetime-picker");
textInput.addEventListener("input", (event) => {
    const start = event.currentTarget.value;
    if (Date.parse(start) > Date.parse(new Date())) {
        startBtnRef.disabled = false;
    } else { window.alert("Please choose a date in the future") }
});
startBtnRef.addEventListener("click", () => {
    startBtnRef.disabled = true;
    const date = document.querySelector('#datetime-picker');
    console.log("Button was clicked");
    const fullTime = Date.parse(date.value) - Date.parse(new Date());
    console.log(fullTime);

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

    function initializeClock() {
        const clock = document.querySelector('.timer');
        const daysSpan = clock.querySelector('span[data-days]');
        const hoursSpan = clock.querySelector('span[data-hours]');
        const minutesSpan = clock.querySelector('span[data-minutes]');
        const secondsSpan = clock.querySelector('span[data-seconds]');

        function updateClock() {
            const time = convertMs(Date.parse(date.value) - Date.parse(new Date()));
            console.log(time);


            daysSpan.innerHTML = addLeadinfZero(time.days);
            hoursSpan.innerHTML = addLeadinfZero(time.hours);
            minutesSpan.innerHTML = addLeadinfZero(time.minutes);
            secondsSpan.innerHTML = addLeadinfZero(time.seconds);

            if ((Date.parse(date.value) - Date.parse(new Date())) <= 0) {
                // window.alert("Timer completed !")

                clearInterval(timeinterval);
            }
        }
        function addLeadinfZero(value) {
            return String(value).padStart(2, 0);
        }
        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    initializeClock();


});



