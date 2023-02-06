let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    string += "*";
  }
  for (let k = 1; k <= i * 2 - 2; k++) {
    string += " ";
  }
  for (let l = i; l <= n; l++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += "*";
  }
  for (let k = i * 2 - 2; k < n * 2 - 2; k++) {
    string += " ";
  }
  for (let l = 1; l <= i; l++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);




//wrong, but closer to standard pyramid shape
// let n = 5;
// let string = "";

// for (let i = 1; i < n; i++) { // loop 1 less time (i < n)
//   for (let j = i; j <= n; j++) { // 1) decreasing triangle
//     string += "*";
//   }
//   for (let k = 1; k <= i; k++) { // 2) right aligned increasing triangle with space
//     string += "0";
//   }
//   for (let j = 1; j < i; j++) { // 3) increasing triangle with space (j < i)
//     string += "@";
//   }
//   for (let k = i; k <= n; k++) { // 4) right aligned decreasing triangle
//     string += "*";
//   }
//   string += "\n";
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) { // 5) increasing triangle
//     string += "*";
//   }
//   for (let k = i; k <= n; k++) { // 6) right aligned decreasing triangle with spaces
//     string += "0";
//   }
//   for (let j = i; j < n; j++) { // 7) decreasing triangle with spaces (j < n)
//     string += "@";
//   }
//   for (let k = 1; k <= i; k++) { // 8) right aligned increasing triangle
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// two pyramids no modifications
// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = i; j <= n; j++) {
//     string += "*";
//   }
//   for (let k = 1; k < i; k++) {
//     string += " ";
//   }
//   for (let l = 1; l <= i; l++) {
//     string += " ";
//   }
//   string += "\n";
// }

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += "*";
//   }
//   for (let k = i; k < n; k++) {
//     string += " ";
//   }
//   for (let l = i; l <= n; l++) {
//     string += " ";
//   }
//   string += "\n";
// }
// console.log(string);
