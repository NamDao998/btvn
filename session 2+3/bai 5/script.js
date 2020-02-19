let x = parseInt(prompt("Nhập 1 số có 3 chữ số: "));
let a = parseInt(x / 100);
let b = x % 100;
let b2= parseInt(b / 10);
let c = x % 10;
let e = a + b2 + c;
console.log(`số ${x} có tổng các chữ số là: ${e}`);
