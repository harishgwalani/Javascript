function getmilk() {
    let money = prompt("how much money u have");
    let noofbotteles =prompt("how much bootle u want to buy")
    console.log(money)
    function nubottles() {
    
        console.log("No. of bottle u buy:" + noofbotteles);
    }
    function moneyleft() {
        let moneyin=noofbotteles*2;
        let moneyinhand = money-moneyin;
        console.log("money left with u " + moneyinhand);
    }
    nubottles();
    moneyleft();
}
getmilk();