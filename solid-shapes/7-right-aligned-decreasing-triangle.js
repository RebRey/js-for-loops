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
console.log(string);

