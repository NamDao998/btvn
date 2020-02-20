let x = Number(prompt("Nhập số cạnh thứ nhất: "));
let y = Number(prompt("Nhập số cạnh thứ hai: "));
let z = Number(prompt("Nhập số cạnh thứ ba: "));
if ((x + y) > z || (x + z) > y || (y + z) > x)
    console.log(`3 số ${x} ${y} ${z} có thể tạo thành 1 tam giác`);
    if( x === y && y === z){
        console.log("đây là tam giác đều"); 
    }
    else if( x === y || y === z || x === z){
        console.log("đây là tam giác cân"); 
    }
    else if(( x * x === y * y + z * z) || (y * y === x * x + z * z) || (z * z === y * y + x * x)){
        console.log("đây là tam giác cân"); 
    }
else{
    console.log("không phải 1 tam giác");
}
    