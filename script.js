// Set the target date
const targetDate = new Date("September 19, 2024 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();
    
    // Find the time difference
    const timeRemaining = targetDate - now;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Display the result in the corresponding elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    // If the countdown is finished, write some text
    if (timeRemaining < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "The countdown has ended!";
    }
}, 1000);