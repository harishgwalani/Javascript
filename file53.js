function isLeap(year) {

    /**************Don't change the code above****************/

    //Write your code here.    

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log("Leap year");
            }
            else {
                console.log("not leap year");
            }
        }
        else {
            console.log("not leap year")
        }
    }
    else {
        console.log("Not Leap year")
    }

    /**************Don't change the code below****************/

}
isLeap(2002);