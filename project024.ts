// Tests for equality and inequality with strings
let string1 : string = "Hello";
let string2 : string = "hello";
let string3 : string = "Hello";

console.log(string1 === string3); // True
console.log(string1 === string2); // False

console.log(string1 !== string2); // True
console.log(string1 !== string3); // False

// Tests using the lower case function
console.log(string1.toLowerCase() === string2); // True
console.log(string1.toLowerCase() === "world"); // False

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1 : number = 10;
let num2 : number = 20;
let num3 : number = 10;

console.log(num1 === num3);