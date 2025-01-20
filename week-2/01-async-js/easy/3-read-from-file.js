const fs = require("fs");

fs.readFile("3-read-from-file.md", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Expensive operation
console.log("Starting an expensive operation...");
let sum = 0;
for (let i = 0; i < 1e9; i++) {
  sum += i;
}
console.log("Expensive operation finished. Sum:", sum);
