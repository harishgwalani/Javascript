const users=[
    {useris:1,firstname:'harish',gender:'male'},
    {useris:2,firstname:'raunak',gender:'male'},
    {useris:3,firstname:'kanak',gender:'female'}
]
// console.log(users);
// for(let user of users)
// {
//     console.log(user);
// }
const [{firstname:user1firstname},,{gender}]=users;
console.log(user1firstname);
