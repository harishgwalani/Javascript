// // spread operator
// const arr1=[1,2,3];
// const arr2=[4,5,6];
// const newarr=[...arr1,...arr2,7,8];
// console.log(newarr);
// //slice
// const array1=[1,2,3];
// const array2=array1.slice(0);
// console.log(array1);
// // concatenate
// const a1=[1,2,3];
// const a2=[].concat.a1;
// console.log(a1);
const obj1={
    key1:"value1",
    key2:"value2"
}
console.log(obj1);
const obj2={
    key3:"value3",
    key4:"value4"
}
console.log(obj2);

const newobj={...obj1,...obj2,key69:"value69"};
const no={..."abcde"};
console.log(newobj);
console.log(no);

console.log(obj2.key3);