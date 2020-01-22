let obj = {
    id: 1,
    name: 'Shailendra'
};

console.log(obj.id + "," + obj.name);

let o = new Object();
o.id = 2;
o.name = 'Mohan';
console.log(o.id + "," + o.name);

//Everything in js is an object
//Everything in js can act as an object

let name = 'Shailendra'; //primitive string
console.log(name.length); // string act as object

let n1 = new String('Shailendra'); //object