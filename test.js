
function convertSeconds(totalSeconds) {
    const days = Math.floor(totalSeconds / (24 * 60 * 60)); // Convert to days
    const remainingAfterDays = totalSeconds % (24 * 60 * 60);
    
    const hours = Math.floor(remainingAfterDays / (60 * 60)); // Convert to hours
    const remainingAfterHours = remainingAfterDays % (60 * 60);
    
    const minutes = Math.floor(remainingAfterHours / 60); // Convert to minutes
    const seconds = remainingAfterHours % 60; // Remaining seconds

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

// Example usage:
const time = convertSeconds(987);
console.log(`${time.days} days, ${time.hours} hours, ${time.minutes} minutes, ${time.seconds} seconds`);

