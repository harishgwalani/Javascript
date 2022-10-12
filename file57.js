function bmiCalculator(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    if (bmi <= 18.5) {
        return `Your BMI is ${bmi}, so you are underweight`;
    }
    else if (bmi >= 18.5 && bmi <= 24.99) {
        return`ur BMI is ${interpretation}, so u r normal weight`;
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        return`your BMI is ${bmi}, so u r overweight`;
    }
    else if (bmi >= 30 && bmi <= 34.9) {
        return`your BMI is ${bmi}, so u r obese`;
    }
    else {
        return`your BMI is ${bmi}, so u r extremly obese`;
    }
}


let x=bmiCalculator(60,2)
console.log(x);