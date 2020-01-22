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
