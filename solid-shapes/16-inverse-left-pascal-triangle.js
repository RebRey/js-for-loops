let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) { 
    string += "*";
  }
  string += "\n";
}
console.log(string);

// Wrong without modifications
// let n = 5;
// let string = "";
// // decreasing triangle (as is)
// for (let i = 1; i <= n; i++) {
//   for (let j = i; j <= n; j++) {
//     string += "*";
//   }
//   string += "\n";
// }

// for (let i = 1; i <= n; i++) { will need to print 1 less row, i < n;
//   for (let j = 1; j <= i; j++) { will need to print 1 less row, j = 0
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

