let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    string += " ";
  }
  for (let k = 1; k < i; k++) {
    string += "*";
  }
  for (let l = 1; l <= i; l++) {
    string += "*";
  }
  for (let k = i; k < n; k++) {
    string += " ";
  }
  for (let j = i; j < n; j++) {
    string += " ";
  }
  for (let k = 1; k < i; k++) {
    string += "*";
  }
  for (let l = 1; l <= i; l++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);



// Help Visualize
// let n = 5;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   for (let j = i; j <= n; j++) {
//     string += "0";
//   }
//   for (let k = 1; k < i; k++) {
//     string += "A";
//   }
//   for (let l = 1; l <= i; l++) {
//     string += "B";
//   }
//   for (let k = i; k < n; k++) {
//     string += "0";
//   }
//   for (let j = i; j < n; j++) {
//     string += "&";
//   }
//   for (let k = 1; k < i; k++) {
//     string += "C";
//   }
//   for (let l = 1; l <= i; l++) {
//     string += "D";
//   }
//   string += "\n";
// }
// console.log(string);
