let output = [];
for (var i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        output.push("hari");
    }
    else if (i % 5 === 0) {
        output.push("Barkhi");
    }
    else {
        output.push(i);
    }
}
console.log(output);