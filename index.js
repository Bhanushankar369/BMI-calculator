function calc(){
    let heightInFeets = parseFloat(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);
    let height = heightInFeets/3.28084;
    let heightSquare = height*height;
    if(!heightInFeets  || !weight){
        document.getElementById("result").textContent = "Enter values first";
        return;
    }
    if(heightInFeets > 12 || heightInFeets < 0 || weight > 200 || weight < 10){
        document.getElementById("result").textContent = "Enter correct values";
        return;
    }
    let BMI = weight/heightSquare;
    if(BMI <= 18.4){
        document.getElementById("result").textContent = `You are Underweight. Your BMI: ${BMI.toFixed(2)}`
        document.getElementById("result").style.color = "rgb(243, 90, 20)";
    }else if(BMI > 18.4 && BMI <= 24.9){
        document.getElementById("result").textContent = `You are Healthy. Your BMI: ${BMI.toFixed(2)}`
        document.getElementById("result").style.color = "green";
    }else if(BMI >= 25 && BMI <= 39.9){
        document.getElementById("result").textContent = `You are Overweight. Your BMI: ${BMI.toFixed(2)}`
        document.getElementById("result").style.color = "#fb1878";
    }else{
        document.getElementById("result").textContent = `You are Obese. Your BMI: ${BMI.toFixed(2)}`
        document.getElementById("result").style.color = "#ff5252";
    }
}