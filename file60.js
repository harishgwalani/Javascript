function fib(n)
{
    let a = [];
    if (n === 1) {
        a = [0];
    }
    else if (n === 2) {
        a = [0, 1];
    }
    else {
        a = [0, 1]
        for (i = 2; i <= n; i++) {
            a.push(a[i - 2] + a[i - 1]);
        }
    }
return a;
}
var x = fib(10);
console.log(x);