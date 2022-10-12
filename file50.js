// // var bmi=bmicalculator(weight,heightinmeter)
// function bmicalculator(w,h)
// {
//     console.log("weight is "+w);
//     // let bmi=w/(h*h);
//     let bmi=w/Math.pow(h,2);
//     return bmi;
// }
// let x=bmicalculator(65,1.8);
// console.log(x);
// var bmi=bmicalculator(weight,heightinmeter)


// const bmicalculator=function (w,h)
// {
//     console.log("weight is "+w);
//     // let bmi=w/(h*h);
//     let bmi=w/Math.pow(h,2);
//     return bmi;
// }
// let x=bmicalculator(65,1.8);
// console.log(x);

const bmicalculator= (w,h) =>
{
    let bmi=w/Math.pow(h,2);
    return bmi;
}
let x=bmicalculator(65,1.8);
console.log(x);