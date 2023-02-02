let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= n - i; j++) {
    if (i === n) {
      string += " ";
    } else {
      if (j == 0 || j == 1) {
        for (let k = 1; k <= i; k++) {
          string += "*";
        }
      }
    }
  }
  string += "\n";
}
console.log(string);
