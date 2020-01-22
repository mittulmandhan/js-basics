**Q1. What is the difference between let and var?**
- var and let, both are the keywords use to declare variables but difference between them given below:

var                                                                |let
------------------------------------------------------------------ | --------------------------------------------------------------
var has function scope i.e. within the body of a function          | let has block level scope i.e. within the curly braces({})
The scope of var is confusing for the native C and Java Developers | let has same scope properties as varibles in C and Java
If var is used before declaration it gives undefined output        | let gives ReferenceError message if used before declaration
var can create a property on the global object(window)             | let does not create a property on the global object(window)
In strict mode, A variable declared using var can be declared as many time as you want | In strict mode, redeclaring a variable which is already declared using let keyword raises a syntax error
