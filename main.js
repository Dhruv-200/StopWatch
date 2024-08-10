const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;
    let calSecs = Math.floor(timeDifference/1000) % 60;
    let mins = Math.floor(timeDifference/1000/60) % 60;
    let hours = Math.floor(timeDifference/1000/60/60) % 24;
    let days = Math.floor(timeDifference/1000/60/60/24); 
    console.log(days);
}

const countdown = (targetDate) => {
setInterval(() => updateCountDown(targetDate), 1000);

}



const targetDate = new Date("July 05 2023 16:00");
countdown(targetDate);