let a1=["it1","it2"];
// let a2=a1.slice(0).concat("item3","item4");
// let a2=[].concat(a1,"item3","it4");
let a2=[...a1,"it3","it4"];
console.log(a1);
console.log(a2);