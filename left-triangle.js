let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// let n = 5; 
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5; 
// for (let i = 1; i < n + 1; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n")
// }
