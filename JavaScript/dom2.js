// getElementById

const r1=document.getElementById("mar")
// console.log(document.getElementById("mar1"));
// console.log(r1);

// getElementByClassName

const r2=document.getElementsByClassName("para")
// console.log(document.getElementsByClassName('wala'));
// console.log(r2);

// getElementByTagName
const r3= document.getElementsByTagName('p');
// console.log(document.getElementsByTagName('h6'));
// console.log(r3);
const tagnames=[...r3];
// console.log(tagnames);
// ==================================================

// querySelector

const r4=document.querySelector(".para");
// console.log(r4);
// const r41=document.querySelector(".container-text h5" )
// console.log(r41);

// querySelectorAll
const r5=document.querySelectorAll('.para');
// console.log(r5);
// const r7=[...r5];
// console.log(r7);



const r51=document.querySelector("ul li:nth-child(3)")
// console.log(r51);


const r52=document.querySelectorAll(".para1,.para2,.para3");
// console.log(r52);

// ChildNodes
// Children
const r6=document.querySelector("ul")
// console.log(r6.childNodes);
// console.log(r6.children);


// nextSibling

const r61= document.querySelector('ul li:nth-child(3)')
// console.log(r61);

// nextlementSibling
// console.log(r61.nextSibling.nextSibling);
// console.log("-----------");
// console.log(r61.nextElementSibling);




// prevoiusSibling

// console.log(r61.previousSibling.previousSibling);
// console.log("----------");

// previousElementSibling

// console.log(r61.previousElementSibling);

// parent
// console.log(r61.parentElement.parentElement.parentElement)
// console.log(r61.parentNode.parentNode.parentNode);



// firstChild
// const r7=document.querySelector("ul")
// console.log(r7.firstChild);


// firstElementChild

// console.log(r7.firstElementChild)

// lastChild

// console.log(r7.lastChild);

// lastElementChild
// console.log(r7.lastElementChild);



// textContent
// const r8 =document.querySelector(".para")
// console.log(r8);
// console.log(r8.textContent);

// innerHTML

// console.log(r8.innerHTML);

// innerText

// console.log(r8.innerText);

r8.textContent="Only content and also with including spaces";
r8.innerHTML="Content with spaces and tags kuda vastai"
r8.innerText= "Only content matrame"

// get attribute and set attribute
// const r9=document.querySelector("ul")
// console.log(r9.attributes);

// console.log(r9.getAttribute('class'));
// console.log(r9.getAttribute('nitish'));

// const r91=document.querySelector("button")
// console.log(r91.getAttribute("class"));
// r91.setAttribute("class","wala");
// console.log(r91.getAttribute("class"));

// dataset

// console.log(r9.dataset);

// console.log(r91.dataset);//empty vastadi

// className

// const r1=document.querySelector("ul")
// console.log(r1.className);
// r1.className="navbar"


// classList

// console.log(r1.classList);



// add

// r1.classList.add("new-list1")
// r1.classList.add("new@list2")
// r1.classList.add("new_list3")


// remove
 
// r1.classList.remove("list")
// r1.classList.remove("new-list1")


// contains

// if(r1.classList.contains('list')){
//     r1.classList.add("orange")
//     console.log("yes");
// }
// else{
//     r1.classList.add("blue")
//     console.log("No");
// }



// toggle

// if(r1.classList.toggle("list")){
//     r1.classList.add("orange")
// }
// else{
//     r1.classList.add("blue")
// }


// DOM Playing With Nodes
const list=document.querySelector('.list')
// console.log(list);
const first=document.querySelector('.first')
const last=document.querySelector(".last")
// // createElement()
const listitem=document.createElement('li');

// // createTextNode()
const text=document.createTextNode("Any help");
// // console.log(listitem);
// // console.log(text);

// // appendChild() insert at last 


// listitem.appendChild(text);
// listitem.classList.add("nav-item");
// // list.appendChild(listitem);


// // insertBefore()

// list.insertBefore(listitem,first)

// // replaceChild()

// list.replaceChild(listitem,first)
// list.replaceChildren(listitem,first)

// console.log(listitem);



// // prepend() first lo add
// list.prepend(listitem);

//remove()

// list.remove()

// removeChild()

// list.removeChild(last)


const list1=document.querySelector(".list")
const listitem1= "<li class='nav-item'>Service</li>"
list1.insertAdjacentHTML('beforebegin',listitem1)
list1.insertAdjacentHTML("afterbegin",listitem1)
list1.insertAdjacentHTML("beforeend",listitem1)
list1.insertAdjacentHTML("afterend",listitem1)
console.log(listitem1);