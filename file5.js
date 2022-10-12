$(document).ready(function()
{
    let temp;

    temp=+prompt("Enter temp")
    
    if (temp < 0) {
        console.log("Extremly cold");
        $("#demo").text("Extremly cold");
    }
    else if (temp < 16) {
        console.log("It is cold");
        $("#demo").text("It is cold");
    }
    else if (temp < 25) {
        console.log("ohk");
        $("#demo").text("ohk");
    }
    else if (temp < 35) {
        console.log("Swim");
        $("#demo").text("Swim");
    }
    else {
        console.log("AC");
        $("#demo").text("AC");
    }

});
    