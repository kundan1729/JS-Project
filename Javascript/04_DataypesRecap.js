
/*
*******Primitive and Non-Primitive Datatype*****
Difference between how these are stored in memory and how they are accessed.


// Primitive Data Types in JavaScript
// There are 7 primitive types: String, Number, Boolean, null, undefined, Symbol, and BigInt.

// 1. String: Represents textual data
let str = "Hello, World!";

// 2. Number: Represents both integer and floating-point numbers
let num = 42;

// 3. Boolean: Represents true or false values
let isTrue = true;

// 4. null: Represents the intentional absence of any object value
let emptyValue = null;

// 5. undefined: A variable that has been declared but not yet assigned a value
let notAssigned;

// 6. Symbol: A unique and immutable primitive value
let sym = Symbol('unique');

// 7. BigInt: Represents numbers larger than 2^53-1
let bigIntNum = BigInt(9007199254740991);

// Memory access for primitive types
// - Primitive types are stored by value in stack memory, and they are immutable.
let a = 10;
let b = a; // 'b' gets a copy of 'a', changing 'b' won't affect 'a'
b = 20;
console.log(a); // Output: 10


// Reference (Non-Primitive) Data Types in JavaScript
// Arrays, Objects, and Functions are examples of reference types, which are mutable and stored in heap memory.

// 1. Array: A list-like object used to store multiple values
let arr = [1, 2, 3, 4];

// 2. Object: A collection of properties, where each property is a key-value pair
let obj = {
    name: "John",
    age: 30
};

// 3. Function: Functions can also be treated as objects
function greet() {
    console.log("Hello!");
}

// Memory access for reference types
// - Reference types are stored by reference in heap memory.
let arr1 = [1, 2, 3];
let arr2 = arr1; // Both 'arr1' and 'arr2' reference the same array
arr2.push(4);
console.log(arr1); // Output: [1, 2, 3, 4]



Is JavaScript Dynamically or Statically Typed?
JavaScript is a dynamically typed language. Variables are not bound to any specific data type.
The type of the variable is determined automatically at runtime based on the value assigned.
/// note basically {} ke andar jo bhi hai wo object hai

let x = 5;        // 'x' is initially a number
x = "Hello";      // Now, 'x' is a string
x = true;         // Now, 'x' is a boolean

m
note \take refrence from ecma script documentation of type of 
especilly typr of null is object.
*/

