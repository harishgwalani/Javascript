let i,n;
n=+prompt("Enter the number");
console.log(typeof n);
let total=0;
for(i=0;i<=n;i++)
{
    total=total+i;
}
console.log(`total for naurl number is ${total}`);
document.getElementById("demo").innerHTML=total;