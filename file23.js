// function myfunc(a, b, ...c) {
//     console.log(`aa is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myfunc(2, 4, 5, 4, 4, 4, 4, 4);
function addal(...numbers)
{
    console.log(numbers);
    console.log(Array.isArray(numbers));
    let i;
let total=0;
    for(i=0;i<numbers.length;i++)
    {
         total=total+numbers[i];
    }
    console.log("total is "+total)
}
addal(1,2,3,4,6,2,1,4,1,2)