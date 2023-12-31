// let num1=10;
// let num2=num1;
// num2=20;
// console.log(num1);
// console.log(num2);

let a={name:'Nitish'}
let b={...a};
a.name='sri'
console.log(a.name);
console.log(b.name);


// function morning(){
//     console.log("good morning");
// }

// function greet(morning){
//     morning();
//     console.log("ram");
// }
// greet(morning);
// let arr=[1,2,3,4];
// // arr.forEach((i)=>console.log(i))
// arr.forEach(function(i){
//     console.log(i);
// })

// var people=[
//     {name:"vikram", age:20, work:'developer'},
//     {name:"vikram", age:21, work:'developer'},
//     {name:"vikram", age:22, work:'developer'}]
// var ages=people.map(function(i){
//     return i.age;
// })
// console.log(ages);
// var ages=people.map(function(i){
//     return i.age;
// }).filter(function(i){
//     return i%2==0
// })
// console.log(ages);



// const arr=[1,2,3,4];
// result=arr.filter(n=>n%2==0)
// .map(n=>n*n)
// .reduce((m,n)=>m+n)
// console.log(result);
// console.log(Math.min(20,30))

// 21
// console.log(date.getMonth());