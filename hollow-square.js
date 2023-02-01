let n = 5; // create a variable called n and set it equal to 5.
let string = ""; // create a variable called string and set it equal to an empty string.


for (let i = 0; i < n; i++) { // create a variable called i (rows) and set it equal to 0. While i is less than n do the following:
  for (let j = 0; j < n; j++) { // create a variable called j (columns) and set it equal to 0. While j is less than n do the following:
    if (i === 0 || i === n - 1) { // if i is equal to 0 or i is equal to n - 1 then
      string += "*"; // append an asterisk to string
    } else {
      if (j === 0 || j === n - 1) { // otherwise if j is equal to 0 or j is equal to n - 1 then
        string += "*"; // append an asterisk to string
      } else {
        string += " "; // otherwise append white space to a string
      }
    }
    //  // increment j by 1
  }
  string += "\n"; // append a new line to string
  //  // increment i by 1
}
console.log(string); // console log the string
