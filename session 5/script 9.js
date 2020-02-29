let N9 = parseInt(prompt("Nhập N"));
let S9 = 0;
for (let i9 = 1; i9 <= N9; i9++) {
  S9 = S9 + 1 /(i9 * (i9 + 1));
}
console.log(S9);
