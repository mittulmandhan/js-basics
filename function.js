//named function

//console.log(Add(1, 2));

function Add(x, y) {
    return x + y;
}

//Anonymous function
const sum = function(x, y) {
        return x + y;
    }
    // console.log(sum(2, 3));

// $("#btn").click(function () {
// });

//ES6
//arrow function
const Adds = (x, y) => {
    return x + y;
}

// console.log(Adds(2, 3));


//callback functions

var areaMethod = (radius) => {
    return 3.14 * radius * radius;
};

var perimeterMethod = (radius) => {
    return 3.14 * radius * 2;
};

var functionalityMethod = (radius, callback) => {
    //business logic http request
    console.log('user has entered ', radius);
    return callback(radius);
};
//console.log(functionalityMethod);

// areaMethod and perimeterMethod acts as a callback function
//console.log(functionalityMethod(20, perimeterMethod));
//console.log(functionalityMethod(2, areaMethod));


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