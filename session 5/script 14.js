let pass14 = prompt("nhập mật khẩu bài 14:");
while(pass14.length < 8){
    alert("mật khẩu quá ngắn");
    pass14 = prompt("nhập lại");
}
console.log(pass14);
