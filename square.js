let n = 4; // create a variable called n and set it equal to 4.
let string = ""; // create a variable called string and set it equal to an empty string.

for (let i = 0; i < n; i++) { // create a variable called i (rows) and set it equal to 0. While i is less than n do the following
  for (let j = 0; j < n; j++) { // create a variable called j (columns) and set it equal to 0. While j is than than n do the following
    string += "*"; // append an asterisk to string
    // increment j by 1
  }
  string += "\n"; // append a new line to string
  // increment i by 1
} 
console.log(string); // console log the string

