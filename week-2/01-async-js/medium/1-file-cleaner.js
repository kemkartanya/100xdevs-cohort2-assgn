const fs = require("fs");

// Read the file
fs.readFile("hey.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Remove extra spaces (including leading and trailing spaces)
  const cleanedData = data.replace(/\s+/g, " ").trim();

  // Write the cleaned data back to the same file
  fs.writeFile("hey.txt", cleanedData, (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
      return;
    }
    console.log("File has been cleaned and updated successfully.");
  });
});
