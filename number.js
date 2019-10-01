let u, v = 5,
    w = false,
    x = true,
    y = 'Hello',
    z = null;

//console.log(u);

// console.log(v / 0); //Infinity 
//console.log(v / 2); //2.5
//console.log(v / x); //5
//console.log(v / w); //Infinity
//console.log(v / z); //Infinity

//v/0=Infinity OR v/Infinity=0
//console.log(v / Infinity); //0

//console.log(v / u); //NaN
//console.log(v / y); //NaN
//console.log(v + 2 - y + w + x); //NaN


//console.log(v + 2 + y + w + x + Infinity + null + v + 2); //7HellofalsetrueInfinitynull52
//console.log(y + v + 2 + w + x); //Hello52falsetrue

x = 1.2e6,
    y = 1.2e-4;

//console.log(x); //1200
//console.log(y); //.00012