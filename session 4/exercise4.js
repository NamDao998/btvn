let a = Number(prompt("số thứ nhất: "));
let b = Number(prompt("số thứ hai: "));
let c = Number(prompt("số thứ ba: "));
// if (a > b && b > c){
//   console.log(`${a} > ${b} > ${c}`);
// }
// else if(a > c && c > b){
//   console.log(`${a} > ${c} > ${b}`); 
// }
// else if(b > c && c > a){
//   console.log(`${b} > ${c} > ${a}`); 
// }
// else if(b > a && a > c){
//   console.log(`${b} > ${a} > ${c}`); 
// }
// else if(c > a && a > b){
//   console.log(`${c} > ${a} > ${b}`); 
// }
// else if(c > b && b > a){
//   console.log(`${c} > ${b} > ${a}`); 
// }
// else{
//   console.log(`Xin hãy nhập 3 số khác nhau`);
// }
let max, min, mid;
if (a < b){
  max = b;
  mid = a;
} 
else if (a > b){
  max = a;
  min = b;
}
else if(c >= max){
  mid = max;
  c = max;
}
else if( c <= min){
  mid = min;
  min = c;
}
else {
  console.log(`Xin hãy nhập 3 số khác nhau`);
}
console.log(`in ra 3 so theo thu tu tang dan ${min} > ${mid} > ${max}`);
