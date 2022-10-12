// const head=document.querySelector(".heading");
// console.log(head)
// console.log(head.parentElement)
// console.log(head.nextSibling);
// console.log(head.nextSibling.nextSibling)
// console.log(head.nextElementSibling)
// const heading=document.querySelector(".heading");
// console.log(heading);
// heading.innerHTML="Hello WorldCup";
// heading.style.color="red";
// heading.style.fontSize="100px"
// heading.classList.add("title");
// // heading.classList.remove("heading")
// const heading=document.createElement("h1");
// heading.innerHTML="javascript is Awesome";
// const parent=document.querySelector(".container");
// console.log(parent);
// parent.appendChild(heading);
const button=document.querySelector("#btn");
console.log(button);
const heading=document.querySelector("#heading");
console.log(heading);
button.addEventListener('click',function()
{
    heading.style.color='purple';
    heading.style.fontSize='100px';
    console.log("button clicked");
})





