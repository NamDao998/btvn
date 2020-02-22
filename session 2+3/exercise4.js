let yourMoney = Number(prompt("Nhập số tiền: "));
    a = yourMoney / 100000;
    b = (yourMoney - parseInt(a) * 100000) / 50000;
    c = (yourMoney - parseInt(a) * 100000 - parseInt(b) * 50000) / 20000;
    d = (yourMoney - parseInt(a) * 100000 - parseInt(b) * 50000 - parseInt(c) * 20000) / 10000
    console.log(`${yourMoney} vnđ = ${parseInt(a)} tờ 100.000 + ${parseInt(b)} tờ 50.000 + ${parseInt(c)} tờ 20.000 + ${parseInt(d)} tờ 10.000 vnđ`);