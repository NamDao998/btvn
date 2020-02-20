let X = parseInt(prompt("Nhập 1 số có 3 chữ số: "));
    A = X / 100;
    B = (X % 100) / 10;
    C = X % 10; console.log(C);
    total = parseInt(A) + parseInt(B) + parseFloat(C);
console.log(`số ${X} có tổng các chữ số là: ${parseInt(A)} + ${parseInt(B)} + ${parseFloat(C)} = ${total}`);
