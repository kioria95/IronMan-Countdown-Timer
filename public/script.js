const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");
const newYears = "1 Jan 2021";

var wallpapers = [ "url('ironman1.jpg')", "url('ironman.jpg')", "url('ironman20.jpg')", "url('ironman46.jpg')"];

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const daysCount = Math.floor(totalSeconds / 3600 / 24);
    const hoursCount = Math.floor(totalSeconds / 3600) % 24;
    const minsCount = Math.floor(totalSeconds / 60) % 60;
    const secondsCount = Math.floor(totalSeconds) % 60;

    days.innerHTML = daysCount;
    hours.innerHTML = formatTime(hoursCount);
    mins.innerHTML = formatTime(minsCount);
    seconds.innerHTML = formatTime(secondsCount);
    
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
 
function setBackground()
{
     let rand =  Math.floor(Math.random() * 5);
    document.body.style.backgroundImage = `${wallpapers[rand]}`;
    document.body.style.transition = "3s"; 
}

countdown();

setInterval(countdown, 1000);
setInterval(setBackground, 5000);
