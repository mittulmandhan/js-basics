// couter is holding the object returned after the execution of anonymous funtion in ()
// In the following code, you cant access privateCounter variable and change method after the block
// but you can access them using the lemda functions mapped with keys respectively
// this is happening because of closures property in javascript
var counter = (function() {
    var privateCounter = 0;

    function change(value) {
        privateCounter += value;
    }

    return {
        increment: () => {
            change(1);
        },
        decrement: () => {
            change(-1);
        },
        value: () => {
            return privateCounter;
        },
    };

})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());
//counter.change(5);
//console.log(counter.value());