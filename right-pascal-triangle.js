let n = 5;
let string = "";

for (let i = 1; i < n; i++) {
  for (let j = 1; j <= i; j++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      string += "*";
    }
    string += "\n";
  }
console.log(string);


//wrong
// let n = 5;
// let string = "";

// for (let i = 1; i < n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += "*";
//   }
//   for (let k = i; k < n; k++) {
//     string += "0";
//   }
//   for (let l = i; l <= n; l++) {
//     string += "0";
//   }
//   string += "\n";
// }

// for (let i = 1; i <= n; i++) {
//     for (let j = i; j <= n; j++) {
//       string += "*";
//     }
//     for (let k = 1; k < i; k++) {
//       string += "0";
//     }
//     for (let l = 1; l <= i; l++) {
//       string += "0";
//     }
//     string += "\n";
//   }
// console.log(string);


