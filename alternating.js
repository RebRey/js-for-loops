let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  if (i % 2 != 0) {
    for (let j = 1; j <= n / 2 + 1; j++) {
      string += "* ";
    }
  } else {
    for (let j = 1; j <= n / 2; j++) {
      string += " *";
    }
  }
  string += "\n";
}
console.log(string);
