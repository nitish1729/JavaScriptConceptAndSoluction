// There are two types of variables in JavaScript : local variable and global variable.
var x = 10;  
var y = 90;  
var z=x+y; 
console.log(z);

                       //JavaScript local variable
// A JavaScript local variable is declared inside block or function.
// It is accessible within the function or block only
/*
<script>  
function abc(){  
var x=10;//local variable  
}  
</script>
<script>  
If(10<13){  
var y=20;//JavaScript local variable  
}  
</script>  

*/

                    //JavaScript global variable                       
// A JavaScript global variable is accessible from any function. 
// A variable i.e. declared outside the function or declared with window object is known as global variable.
/*
<script>  
var data=200;//gloabal variable  
function a(){  
document.writeln(data);  
}  
function b(){  
document.writeln(data);  
}  
a();//calling JavaScript function  
b();  
</script>  

*/
  // 4 Ways to Declare a JavaScript Variable:
//   Using var
//   Using let
//   Using const
//   Using nothing

let num = 5;
let num2 = 6;
let Add =  num + num2;
console.log(Add);

const num1 = 50;
const num3 = 60;
const Add1 =  num1 + num3;
console.log(Add1);

//Always declare JavaScript variables with var,let, orconst.

// If you want a general rule: always declare variables with const.
const price1 = 25;
const price2 = 60;
let total = price1 + price2;
console.log(total);

const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';
console.log(pi);
console.log(person);
console.log(answer);
// Creating a variable in JavaScript is called "declaring" a variable.

let p = "5" + 2 + 3;
console.log(p);
  // JavaScript Dollar Sign $
  let $ = "Hello World";
let $$$ = 2;
let $myMoney = 5;
console.log($);
console.log($$$);
console.log($myMoney);

// Variables defined with "let" cannot be Redeclared.

// Variables defined with "let" must be Declared before use.

// Variables defined with "let" have Block Scope.
// Cannot be Redeclared
// Variables defined with "let" cannot be redeclared.

// You cannot accidentally redeclare a variable.

// With let you can not do this:
// let x = "John Doe";

// let x = 0;
// console.log(x);
// SyntaxError: Identifier 'x' has already been declared

 // With var you can:
 var x1 = "John Doe";

var x = 0;
console.log(x,x1);
// Variables declared inside a { } block cannot be accessed from outside the block:
// {
//     let x = 2;
//   }
  // x can NOT be used here
//   Variables declared with the var keyword can NOT have block scope.

// Variables declared inside a { } block can be accessed from outside the block.
// {
//     var x = 2;
//   }
  // x CAN be used here
                 
                                 //JavaScript Const

//  Variables defined with const cannot be Redeclared.

//  Variables defined with const cannot be Reassigned.

//  Variables defined with const have Block Scope.

// Must be Assigned
// JavaScript const variables must be assigned a value when they are declared:

//   Correct
//  const PI = 3.14159265359;

// Incorrect
 // const PI;
// PI = 3.14159265359;

// Constant Objects and Arrays
// The keyword const is a little misleading.

// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change the elements of constant array
// Change the properties of constant object
// Constant Arrays
// You can change the elements of a constant array:

// You can create a constant array:
// const cars = ["Nitish", "Kumar", "Mehta"];
// You can change an element:
// cars[0] = "Toyota";

// You can add an element:
// cars.push("Audi");
// const marks = [89,90,70,40];
// console.log(marks[1]);

var l = 10;
l += 5;
console.log(l);

let lm = 100;
lm += 5000;
console.log(lm);
// The increment operator (++) increments numbers.

console.log("The increment operator (++) increments numbers.");
let A = 5;
A++;
let Z = A;
console.log(Z);
++A;
A++;
console.log(Z);
// The decrement operator (--) decrements numbers.
console.log("The decrement operator (--) decrements numbers.");
let F = 5;
//F--;
F--;
F--;
F--;
let Y = F;

console.log(Y);


let seq = 25;
let res = Math.pow(seq,2);
console.log(res);

console.log("Operator Precedence:");
var oper = 100+ 20-30 +20*7;
console.log(oper);
console.log("JavaScript objects are written with curly braces .");

// The typeof operator returns the type of a variable or an expression:
console.log("The typeof operator returns the type of a variable or an expression:");

var per =  3.14;
console.log("                ");
console.log("                ");
console.log(typeof 3.14);

console.log("JavaScript " + "''''''''''''''''''''''' " + "Functions");

// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

let check = myFunction(10,20);
function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
    
  }
  console.log(check);
//   JavaScript Function Syntax
//   A JavaScript function is defined with the function keyword,
//    followed by a name, followed by parentheses ().

//    Function names can contain letters, digits, underscores, and dollar signs 
//    (same rules as variables).

//    function name(parameter1, parameter2, parameter3) {
//      code to be executed
//   }

function toCelsius(f) {
    return (5/9) * (f-32);
  }
  console.log(toCelsius);

//   const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.lastName);

let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);

statem1 = 20;
statem2 = 10;
if(statem1> statem2)
{
console.log("statem1");
}
else
{
    console.log("statem2");
}
