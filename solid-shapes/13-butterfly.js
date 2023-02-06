let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += "*";
  }
  for (let k = i * 2; k <= n * 2 - 1; k++) {
    string += " ";
  }
  for (let l = 1; l <= i; l++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 1; i <= n - 1; i++) {
  for (let j = n - 1; j >= i; j--) {
    string += "*";
  }
  for (let k = 1; k <= i * 2; k++) {
    string += " ";
  }
  for (let l = n - 1; l >= i; l--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

