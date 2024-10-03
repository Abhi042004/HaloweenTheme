// Countdown Timer
const countdown = () => {
    const halloweenDate = new Date("Oct 31, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const timeDifference = halloweenDate - now;
  
    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
      document.getElementById("days").innerHTML = `${days} <span>Days</span>`;
      document.getElementById("hours").innerHTML = `${hours} <span>Hours</span>`;
      document.getElementById("minutes").innerHTML = `${minutes} <span>Minutes</span>`;
      document.getElementById("seconds").innerHTML = `${seconds} <span>Seconds</span>`;
    } else {
      document.getElementById("message").innerHTML = "Happy Halloween!";
      document.getElementById("countdown").style.display = "none";
    }
  };
  
  // Run countdown function every second
  setInterval(countdown, 1000);
  