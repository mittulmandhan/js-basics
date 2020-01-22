//callback functions
///js has a feature of storing a function in a variable since we everything in js acts as an object 
// so we can take advantage of this feature and pass a function in some other functions
// which gives birth to a new concept of callback function
// callback function is basically a function passed in argument of some other function and used in it accordingly

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