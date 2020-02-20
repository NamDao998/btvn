let month = parseInt(prompt("nhập 1 tháng bất kì: "));
if ( month == 2  || month === 3 || month === 4){
    console.log(`mùa xuân`);
}
else if( month == 5 || month === 6 || month === 7){
    console.log(`mùa hè`);
}
else if( month == 8 || month === 9 || month === 10){
  console.log(`mùa thu`);
}
else if( month == 1 || month === 11 || month === 12){
  console.log(`mùa đông`);
}
else {
    console.log("nhập sai");
}