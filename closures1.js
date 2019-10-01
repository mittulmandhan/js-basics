// closures in JS
// when a function returns another inner function
// and inner function can still access properties of outer function (wrapper function)
// even after completion of outer function;
var greeting = (fname, lname, gender) => {
    // local variable
    var salutation = (gender == 'M') ? 'Mr. ' : 'Ms. ';
    var fullName = fname + ' ' + lname;
    return () => console.log(salutation + fullName);
};

var response = greeting('Mittul', 'Mandhan', 'M');
//response();

var convert = (dollar) => {
    // local variable
    var rupeeFactor = 60;
    return () => dollar * rupeeFactor;
};

// console.log(convert(30)());

var suppose = () => {
    var something = 8;
};

suppose();
console.log(something);

function myfunction() {
    var random = 72;
}

//console.log(random);