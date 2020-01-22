fun();
// console.log(x);
// console.log(y);
console.log(a);
function fun() {
    if(true) {
        let x=10;// block level scope
        var y=20;// function level scope
        a=40;// global level scope
        console.log(x);
        console.log(y);
        console.log(a);
    }
    // console.log(x);
    console.log(y);
    console.log(a);
    return y;
}