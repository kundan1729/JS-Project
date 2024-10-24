/*

Stack(Primitve)=> given copy , Heap(Non-Primitive) => given refrence  of variable

*/


let  name = "Kundan"

let name2 = name

name2 = "Gaurav "

console.log(name2)
console.log(name)

name = "Jhon"

console.log(name2)
console.log(name)

/*

Gaurav 
Kundan
Gaurav 
Jhon

*/


let userOne = {
    emailId: "Miller@google.com",
    upiId:"xyz@ybl",
}
let userTwo = userOne


console.log(userOne.emailId);

userTwo.emailId = "Captain@google.com"



console.log(userOne.emailId);
console.log(userTwo.emailId);

/*
  ****output****
Miller@google.com
Captain@google.com
Captain@google.com


*/


