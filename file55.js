function bmiCalculator(weight, height) {
    let interpretation = weight / Math.pow(height, 2);
    return interpretation;
}
let x = bmiCalculator(60, 2);
console.log(x);
if (x <= 18.5) {
    console.log(`Your BMI is ${x}, so you are underweight`);
}
else if (x >= 18.5 && x <= 24.99) {
    console.log(`ur BMI is ${x}, so u r normal weight`);
}
else if (x >= 25 && x <= 29.9) {
    console.log(`your BMI is ${x}, so u r overweight`);
}
else if (x >= 30 && x <= 34.9) {
    console.log(`your BMI is ${x}, so u r obese`);
}
else {
    console.log(`your BMI is ${x}, so u r extremly obese`);
}