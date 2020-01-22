**Q1. What is the difference between let and var?**
* var and let, both are the keywords use to declare variables but difference between them are given below.
* **var** has **function scope** i.e. within the body of a function but **let** has **block** level **scope** i.e. within the curly braces({})
````
function my() {
  if(true) {
    var x=10;// function level scope
    let y=20;// block level scope
    console.log(x);// 10
    console.log(y);// 20
  }
  console.log(x);// 10
  console.log(y);// y is not declared
}
console.log(x);// x is not declared
console.log(y);// y is not declared

my();
````
* The scope of var is confusing for the native C and Java Developers whereas let has same scope properties as varibles in C and Java
* If var is used **before declaration** it gives undefined output but let gives ReferenceError message if used before declaration
````
function run() {
  console.log(foo); // undefined
  var foo = "Foo";
  console.log(foo); // Foo
}

run();
````

````
function run() {
  console.log(foo); // ReferenceError
  let foo = "Foo";
  console.log(foo); // Foo
}

run();
````
* var can create a property on the **global object(window)**. On the other hand, let does not create a property on the global object(window)
````
var foo = "Foo";  // globally scoped
let bar = "Bar"; // globally scoped

console.log(window.foo); // Foo
console.log(window.bar); // undefined
````
* **Declaration in same scope:** In strict mode, A variable declared using var can be declared as many time as you want whereas in strict mode, redeclaring a variable which is already declared using let keyword raises a syntax error
````
'use strict';
var foo = "foo1";
var foo = "foo2"; // No problem, 'foo' is replaced.

let bar = "bar1";
let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared
````


**Q2. For loop vs forEach method.**
* For loop takes 3 statements within it i.e. initialization, condition and itteration jump.On the other hand, forEach is a prototype method which takes a function definiton as an argument which is executed for each element in the array and forEach exists within all arrays.
* We can itterate an array using for loop in accordance to its indexes whereas forEach itterates each element.
````
var arr=[3,1,8,9,4];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
````
````
var arr=[3,1,8,9,4];

arr.forEach(num => {
  console.log(num);
});
````
**output**
````
3
1
8
9
4
````
* forEach method allows you to keep a variable's scope within the block.
* forEach method has lower chance of accidental errors due to wrong condition.
* forEach looks cleaner to read than for loop.
* We can break out of a for loop earlier which can save efforts but in forEach method we have to itterate over all the elements which can cause performance issues.


**Q3. Arrow function vs anonymous function**
(they are two different concepts)
* **Syntax** of Anonymous function is same as normal function except it does not have a name whereas arrow functions have slitely different syntax
````
var y=function () {
  console.log('Anonymous');
}
y();// Anonymous

var x=() => {
  console.log('Arrow');
};
x();// Arrow
````
* Arrow functions provide lexical binding, meaning you get the control back on the value of this inside the function’s body. By getting the control back means that it’s easy to know which object this refers to just by looking at the code where your arrow function is defined (not called)


**Q4. Normal function vs Arrow function**
* **Syntax**
````
// normal function
let square = function my(x){ 
  return (x*x);
}; 
console.log(square(9));// 81
````
````
// Arrow functions
var square = (x) => { 
    return (x*x); 
}; 
console.log(square(9));// 81
````
* **Availability of aguments onject:** Arguments objects are not available in arrow functions, but are available in regular functions.
````
let user = {       
    show(){ 
        console.log(arguments); 
    } 
}; 
user.show(1, 2, 3);
// result:
// 1
// 2
// 3
````
````
let user = {	 
		show_ar : () => { 
		console.log(...arguments); 
	} 
}; 
user.show_ar(1, 2, 3); 
// result:
// reference error
````
* **Using new keyword:** Regular functions are callable and constructible as well that means they can be called using new keyword whereas arrow functions are callable but not costructible which means they can not be called using new keyword.
````
let x = function(){ 
	console.log(arguments); 
}; 
new x =(1,2,3); 

// output:
// 1
// 2
// 3
````
````
let x = ()=> { 
    console.log(arguments); 
}; 
new x(1,2,3); 

// output:
// TypeError:x is not a constructor
````
**Q5. Callbacks.**
* JavaScript functions have the type of Objects. So, much like any other objects (String, Arrays etc.), They can be passed as an argument to any other function while calling.callbacks are implemented just by using this exact property of Javascript.
*  If we want to execute a function right after the return of some other function, then callbacks can be used.

**example1:**
````
   // add() function is called with arguments a, b 
   // and callback, callback will be executed just  
   // after ending of add() function 
   function add(a, b , callback){ 
   document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
   callback(); 
   } 
     
   // disp() function is called just 
   // after the ending of add() function  
   function disp(){ 
   document.write('This must be printed after addition'); 
   } 
     
   // Calling add() function 
   add(5,6,disp);
````
**output:**
````
The sum of 5 and 6 is 11.
This must be printed after addition
````

**example2:**
````
// add() function is called with arguments a, b 
   // and callback, callback will be executed just  
   // after ending of add() function 
   function add(a, b , callback){ 
   document.write(`The sum of ${a} and ${b} is ${a+b}.` +"<br>"); 
   callback(); 
   } 
   
   // add() function is called with arguments given below 
   add(5,6,function disp(){ 
   document.write('This must be printed after addition.'); 
   });
````
**output:**
````
The sum of 5 and 6 is 11.
This must be printed after addition.
````

Q6. 
