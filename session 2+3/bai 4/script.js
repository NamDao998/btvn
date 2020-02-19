let x = parseInt(prompt("Nhập số tiền: "));
let a = parseInt(x / 100000);
let b = parseInt((x - a * 100000) / 50000);
let c = parseInt((x - a * 100000 - b * 50000) / 20000);
let d = parseInt((x - a * 100000 - b * 50000 - c * 20000) / 10000);
console.log(`${x} vnđ = ${a} tờ 100.000 + ${b} tờ 50.000 + ${c} tờ 20.000 + ${d} tờ 10.000 vnđ`);
