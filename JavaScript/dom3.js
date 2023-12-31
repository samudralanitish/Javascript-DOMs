
//getElementById selects only 1 id at a time which means only one text
const r1=document.getElementById("myid")
// console.log(r1);
// console.log(r1.innerHTML);
// const r11=r1.innerHTML="Happy New Year"
// console.log(r11);

//getElementsByClassName selects multiple classes at a time which means many texts
const r2=document.getElementsByClassName("mypara")
// console.log(r2);

//getElementsByTagName selects multiple tags with same tag name that is ptag or h1tag like that
const r3=document.getElementsByTagName("p")
// console.log(r3);

//querySelector selects only one list of data at a time ex: if there are 4 list 1 list is selected
const r4=document.querySelector("li");
// console.log(r4);

//querySelectorAll selects all lists of data at a time ex: if there are 4 lists all 4 lists are selected
const r5=document.querySelectorAll("li")
// console.log(r5);


const r6=document.querySelector("ul")
//children returns all the childs under ul
// console.log(r6.children);
//childNodes returns all the childs with gaps also i.e., text, li, text, li... like that
// console.log(r6.childNodes);

const r7=document.querySelector("ul li:nth-child(2)")

//nextSibling return "About" ki next gap i.e., #text
// console.log(r7.nextSibling)

//nextElementSibling returns "About" ki next element i.e., "Projects" which means li
// console.log(r7.nextElementSibling);

//returns content
// console.log(r7.nextSibling.textContent);

//return content
// console.log(r7.nextElementSibling.textContent);

//previousSibling returns previous element i.e., gap
// console.log(r7.previousSibling);

//previousElementSibling returns previous list element
// console.log(r7.previousElementSibling);

//parentElemnt lo no documnet returns null
// console.log(r7.parentElement);


//parentNode will always return parent and it contains documnent
// console.log(r7.parentNode);

//firstChild returns text
// console.log(r6.firstChild);

//firstElementChild returns content
// console.log(r6.firstElementChild.textContent);

//lastChild returns text
// console.log(r6.lastChild);

//lastElementChild returns content
// console.log(r6.lastElementChild.textContent);

//getAttribute attributes means for ex: h1 ki class ,id ala ivi attributes
// console.log(r6.getAttribute('class'));
// console.log(r6.getAttribute('id'));

//setAttribute sets the class names but the existing class name will disappear
// const r61=r6.setAttribute('class','myoll');
// const r62=r6.setAttribute('id','wala2');

// console.log(r6.getAttribute('class'));
// console.log(r6.getAttribute('id'));

// console.log(r6.getAttributeNames());

//classList.add used to add the other class names without disturbing the existing class names
// r6.classList.add('myol2')
// console.log(r6.className);


// r6.classList.toggle('myol3');
// console.log(r6.className);


const first=document.querySelector('.first')
const last=document.querySelector('.last')
// console.log(first);

const r8=document.createElement('li')

const r9=document.createTextNode('Any help')

// r8.appendChild(r9);
// console.log(r8);

// r6.appendChild(r8)

//oka elemnt kante danikante mundhu veyyali
// r6.insertBefore(r8,first);
// r6.insertBefore(r8,last)


//Replace avutundi
// r6.replaceChild(r8,last);
// r6.replaceChildren(r8,first)
// r6.replaceChild(r8,last);


//first lo add
// r6.prepend(r8);

const list=document.querySelector(".myol")
const listitem="<li class='nav-item'>Service</li>"
list.insertAdjacentHTML('beforebegin',listitem);
list.insertAdjacentHTML('afterbegin',listitem);
list.insertAdjacentHTML('beforeend',listitem)
list.insertAdjacentHTML('afterend',listitem);

