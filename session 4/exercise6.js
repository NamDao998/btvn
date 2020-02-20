let X = Number(prompt("nhập số điện: "));
if (X >= 0 && X <= 50){
    X2 = X * 1.678;
    console.log(`Số điện là: ${X} có giá là: ${X2}`);
}
    else if(X >= 51 && X <= 100){
        X2 = X * 1.734;
        console.log(`Số điện là: ${X} có giá là: ${X2}`);   
    }
    else if(X >= 101 && X <= 200){
        X2 = X * 2.014;
        console.log(`Số điện là: ${X} có giá là: ${X2}`);   
    }
    else if(X >= 201 && X <= 300){
        X2 = X * 2.536;
        console.log(`Số điện là: ${X} có giá là: ${X2}`);   
    }
    else if(X >= 301 && X <= 400){
        X2 = X * 2.834;
        console.log(`Số điện là: ${X} có giá là: ${X2}`);   
    }
    else if(X >= 400){
        X2 = X * 2.927;
        console.log(`Số điện là: ${X} có giá là: ${X2}`);   
    }
