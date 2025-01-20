function formatTime(date) {
  // Extract hours, minutes, and seconds
  let hours24 = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  // Format hours, minutes, and seconds to always have two digits
  let hours12 = hours24 % 12 || 12; // Convert to 12-hour format
  let amPm = hours24 >= 12 ? "PM" : "AM";

  let formatted24 = `${String(hours24).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  let formatted12 = `${String(hours12).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")} ${amPm}`;

  return { formatted24, formatted12 };
}

// Function to display time
function displayClock() {
  const now = new Date();
  const { formatted24, formatted12 } = formatTime(now);
  console.clear(); // Clear console to display the updated time
  console.log("24-Hour Format: " + formatted24);
  console.log("12-Hour Format: " + formatted12);
}

// Update every second
setInterval(displayClock, 1000);
