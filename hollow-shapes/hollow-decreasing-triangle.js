let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    if (i == 1 || j == i || j == n) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
}
console.log(string);
