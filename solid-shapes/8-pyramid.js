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
  string += "\n";
}
console.log(string);

