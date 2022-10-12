const fruits = ["apple", "mango"];
console.log(fruits)
fruits.push("banana");
console.log(fruits);
for (let i of fruits) {
    console.log(i);
}
for (let i in fruits) {
    console.log(fruits[i]);
}