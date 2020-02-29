let x1 = parseInt(prompt("nhập 1 số bất kì:"));
a1 = Math.sqrt(x1);
let soLuongUocSo = 0;
if (x1 === a1 * a1) {
  console.log(`${x1} là số chính phương`);
}
//  else if (x1 === parseInt(x1) && x1 % 1 == 0 && x1 % x1 == 0) {
//   console.log(`${x1} là số nguyên tố`);
// } else {
//   console.log(`${x1} không phải là số chính phương hay số nguyên tố`);
// }
for (let i = 1; i <= x1; i++) {
  if (x1 % i === 0){
    console.log(i);
    soLuongUocSo++;
  }
}
if(soLuongUocSo > 2){
  console.log("Hợp số");
} else {
  console.log("số nguyên tố");
}