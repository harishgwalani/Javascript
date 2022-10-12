//arrow function
const happybirthday = () => {
    console.log("Wish u very happy  birthday to you...");
}
happybirthday();
const iseven = (a) => a % 2 === 0;
let ans = iseven(5);
console.log("No. is Even " + ans);
const addi = (a, b) => a + b;
let answ = addi(4, 5);
console.log("Addition is " + answ);
const add = (a, b, c) => a + b + c;
let answe = add(3, 3, 4);
console.log("addition of three number is " + answe);
const arrayfind = (a, t) => {
    for (i = 0; i < a.length; i++) {
        if (a[i] === t) { return i; }
    }
    return -1;
}
let y = [1, 2, 3, 4, 5, 7,];
let answer = arrayfind(y, 7);
console.log(answer);
