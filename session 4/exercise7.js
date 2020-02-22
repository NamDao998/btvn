let height = Number(prompt("Chiều cao: "));
let weight = Number(prompt("cân nặng: "));
BMI = weight / (height * height);
if (BMI < 18.5){
    console.log(`BMI: ${BMI}. Thiếu cân`);
}
    else if(BMI >= 18.5 && BMI <= 22.99){
        console.log(`BMI: ${BMI}. Bình thường`);
    }
    else if(BMI >= 25 && BMI <= 29.99){
        console.log(`BMI: ${BMI}. Béo phì độ I`);
    }
    else if(BMI >= 30 && BMI <= 39.99){
        console.log(`BMI: ${BMI}. Béo phì độ II`);
    }
    else if(BMI >= 40){
        console.log(`BMI: ${BMI}. Béo phì độ III`);
    }
else{
    console.log("nhập sai");
}
    