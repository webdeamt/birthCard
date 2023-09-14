// Calculate the time remaining until Karina's birthday
function calculateTimeUntilBirthday() {
    const now = new Date();
    const birthday = new Date("2023-09-15");
    const timeRemaining = birthday - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update the countdown every second
setInterval(calculateTimeUntilBirthday, 1000);

