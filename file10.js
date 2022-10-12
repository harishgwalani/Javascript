$(document).ready(function()
{
    let i;
    let total = 0;
    i = 1;
    var text="";
    do {
        total = total + i;
        text +="value of i is "+i+"<br>";
        i++;
    } while (i <= 10);
    text=text+"total is"+total+"<br>"
    document.getElementById("demo").innerHTML=text;
});
