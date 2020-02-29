let N = parseInt(prompt("Nhập N bài 10"));
let f1=1;
let f2=1;
let count = 2;
for (i = 1; i < N / 2; i++){
    f1=f1+f2;
    count++;
    f2=f2+f1;
    count++;
}
console.log(`f${count-1}: ${f1}, f${count}: ${f2}`);