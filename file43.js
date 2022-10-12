//function expression
const happybirthday = function () {
    console.log("Wish u very happy  birthday to you...");
}
happybirthday();
const iseven = function (a) {
    if (a % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
let ans = iseven(4);
console.log("No. is Even " + ans);
const addi = function (a, b) {
    return a + b;
}
let answ = addi(4, 5);
console.log("Addition is " + answ);
const add = function (a, b, c) {
    return a + b + c;
}
let answe = add(2, 3, 4);
console.log("addition of three number is " + answe);
const arrayfind = function (a, t) {
    console.log(a);
    console.log(t);
    console.log(a.length)
    for (i = 0; i < a.length; i++) {
        if (a[i] === t) { return i; }
    }
    return -1;
}
let y = [1, 2, 3, 4, 5, 7,];
console.log(y);
let answer = arrayfind(y, 7);
console.log(answer);
