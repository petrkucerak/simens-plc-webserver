function convertSecondsToHHMMSS(seconds) {
  const hours = Math.floor(seconds / 3600); // Calculate hours
  seconds %= 3600; // Remaining seconds after hours
  const minutes = Math.floor(seconds / 60); // Calculate minutes
  const remainingSeconds = seconds % 60; // Remaining seconds after minutes

  // Adding leading zeros to format the output as "HH:MM:SS"
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
