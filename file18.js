const person = {
    name: "harish",
    age: 32,
    "person hobbies": ["guitar", "cricket", "football"]
}
for(let i in person)
{
    console.log(`${i}:${person[i]}`)
    console.log(person[i]);
}
for(let i of Object.keys(person))
{
    console.log(person[i]);
}