const fs = require("fs");

const content = "Hello, this is a sample text written to the file!";

fs.writeFile("hello.txt", content, (err) => {
  if (err) {
    console.error("Error writing to the file:", err);
    return;
  }
  console.log("File has been written successfully.");
});

// Simulating another task
console.log("Starting another task...");

// Expensive operation
let product = 1;
for (let i = 1; i <= 1e6; i++) {
  product *= i;
}
console.log(
  "Expensive operation finished. Product (modulo 1e9):",
  product % 1e9
);
