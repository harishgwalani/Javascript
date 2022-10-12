function whopay(names)
{
    console.log(names);
var noofperson=names.length;
console.log("no of person "+noofperson);
var randompersonposition=Math.floor(Math.random()*noofperson);
console.log("random person posion "+randompersonposition)
var randomperson=names[randompersonposition];
console.log("random person value "+randomperson);
return randomperson +" is going to buy liunch for all"
}
let output=["harish","barkhi","Raunak","kanak"];
let o=whopay(output);
console.log(o);