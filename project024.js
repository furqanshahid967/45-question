// Tests for equality and inequality with strings
var string1 = "Hello";
var string2 = "hello";
var string3 = "Hello";
console.log(string1 === string3); // True
console.log(string1 === string2); // False
console.log(string1 !== string2); // True
console.log(string1 !== string3); // False
// Tests using the lower case function
console.log(string1.toLowerCase() === string2); // True
console.log(string1.toLowerCase() === "world"); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 20;
var num3 = 10;
console.log(num1 === num3);
