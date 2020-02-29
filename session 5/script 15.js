let pass15 = prompt("Nhập mật khẩu bài 15");
while (
  pass15.length <= 8 ||
  pass15.search("$") <= 0 ||
  pass15.search("%") <= 0 ||
  pass15.search("_") <= 0
) {
  pass15 = prompt("Nhập lại mk");
}
console.log(pass15);
