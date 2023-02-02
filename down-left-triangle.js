let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n-i ; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


// let n = 5;
// let string = "";
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {   // printing spaces
//     string += "*";
//   }
//   // printing star
//   for (let k = 0; k < i - n; k++) {   // printing stars
//     string += " ";
//   }
//   string += "\n";
// }
// console.log(string);