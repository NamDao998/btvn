let x = Number(prompt("nhap x: "));
let y = Number((Math.sin(Math.PI * x ** 2 * Math.PI / 180) + Math.sqrt(x ** 2 + 1))
                / (Math.E ** 2 * x + Math.cos(Math.PI / 4 * x)));
console.log(`x = ${x} có y = ${y}`);



