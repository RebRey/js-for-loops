let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += " ";
  }
  for (let k = i; k <= n; k++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 1; i < n; i++) { 
    for (let j = i; j < n; j++) {  
      string += " ";
    }
    for (let k = 0; k <= i; k++) { 
      string += "*";
    }
    string += "\n";
  }
  console.log(string);


// let n = 5;
// let string = "";
// // Unmodified right aligned decreasing triangle
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += " ";
//   }
//   for (let k = i; k <= n; k++) {
//     string += "*";
//   }
//   string += "\n";
// }

// // right aligned increasing triangle
// for (let i = 1; i <= n; i++) { // needs 1 less row i < n
//     for (let j = i; j <= n; j++) { // needs // i less row j < n
//       string += " ";
//     }
//     for (let k = 1; k <= i; k++) { // needs 1 less row k = 0
//       string += "*";
//     }
//     string += "\n";
//   }
//   console.log(string);