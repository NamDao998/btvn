let a = parseInt(prompt("a"));
let b = parseInt(prompt(" b"));
let s = ``;
while (a < 0 && b < 0) {
    a = parseInt(prompt("nhập lại a>0"))
    b = parseInt(prompt("nhập lại b>0"))
}
for ( i = 0; i < b; i++){
    s += "*";
}
let result =``;
for (let i = 0; i < a ; i++) {   
    result += s + `\n`;
}
console.log(result);