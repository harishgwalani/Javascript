function getmilk() {
    let money = prompt("how much money u have");
    console.log(money)
    function nubottles() {
    
        let noofbotteles = Math.floor(money / 2);
        console.log("No. of bottle u buy:" + noofbotteles)
    }
    function moneyleft() {
        let moneyinhand = money % 2;
        console.log("money left with u " + moneyinhand)
    }
    nubottles();
    moneyleft();
}
getmilk();