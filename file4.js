
let a;
a= +prompt("Enter the age");
console.log(typeof a);
if(a >= 18)
{
    console.log("U r Eligible for married");
    document.getElementById("demo").innerHTML="U r Eligible for married";
}
else{
    console.log("U r Not Eligible for married");
    document.getElementById("demo").innerHTML="U r not Eligible for married";
}