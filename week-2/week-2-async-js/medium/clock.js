function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const time24 = `${hours}:${minutes}:${seconds}`;

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const time12 = `${hours}:${minutes}:${seconds} ${ampm}`;

    return { time24, time12 };
}

function displayClock() {
    const now = new Date();
    const { time24, time12 } = formatTime(now);

    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
}

// Update the clock every second
setInterval(displayClock, 1000);