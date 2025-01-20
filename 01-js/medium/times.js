/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  let t1 = Date.now(); // Record start time

  let sum = 0; // Initialize sum
  for (let i = 1; i <= n; i++) {
    sum += i; // Compute sum
  }

  let t2 = Date.now(); // Record end time

  return t2 - t1; // Return time in seconds
}
