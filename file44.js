//arrow function
const happybirthday = () => {
    console.log("Wish u very happy  birthday to you...");
}
happybirthday();
const iseven = (a) => {
    // if (a % 2 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }
    return a % 2 === 0;
}
let ans = iseven(4);
console.log("No. is Even " + ans);
const addi = (a, b) => {
    return a + b;
}
let answ = addi(4, 5);
console.log("Addition is " + answ);

const add = (a, b, c) => {
    return a + b + c;
}
let answe = add(2, 3, 4);

// function add(a,b,c)
console.log("addition of three number is " + answe);
const arrayfind = (a, t) => {
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
