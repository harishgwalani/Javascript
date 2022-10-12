let n1=6;
let n2=n1;
console.log(n1);
console.log(n2);
n1++;
console.log(n1);
console.log(n2);
let a1=["it1","it2"];
let a2=a1;
console.log(a1);
console.log(a2);
a1.push("item3");
console.log(a1);
console.log(a2);
// let a3=a1.slice(0);
// let a3=[].concat(a1);
let a3=[...a1];
a1.push("it4");
console.log(a1===a3)
console.log(a1);
console.log(a3);

