let x = Number(prompt("Nhập giá trị x: "));
y = ((Math.sin((Math.PI * x ** 2) * Math.PI /180) + Math.sqrt(x ** 2 + 1))
    / Math.E ** 2 * x + Math.cos(Math.PI / 4 * x * Math.PI /180))
console.log(`với x = ${x} thì y = ${y}`);    