let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += " ";
  }

  for (let k = i; k <= 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }

//   for (let k = n - 1; k >= i; k--) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
