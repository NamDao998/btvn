let x1 = Number(prompt("nhập 1 số bất kì:"));
a1 = Math.sqrt(x1);
if (x1 === a1 * a1) {
  console.log(`${x1} là số chính phương`);
} else if (x1 === parseInt(x1) && x1 % 1 == 0 && x1 % x1 == 0) {
  console.log(`${x1} là số nguyên tố`);
} else {
  console.log(`${x1} không phải là số chính phương hay số nguyên tố`);
}
