'use strict';

// let x = 5;
// alert( x++ );

//console.log([ ] + false - null + true);

// let y = 1; 
// let x = y = 2; 
// alert(x);

// console.log([ ] + 1 + 2);

//alert( "1"[0] );

// console.log(2 && 1 && null && 0 && undefined)


//  if (!!( a && b ) == (a && b)) { 
//     alert("net raznicy");
// }else {
//     alert("est raznica");
// }

// alert( null || 2 && 3 || 4 );

// a = [1, 2, 3]; b = [1, 2, 3]; 
//  (a == b) ? alert("net raznicy") : alert("est raznica");

// alert( +"Infinity" );

// ("ёжик" > "яблоко") ? console.log("verno") : console.log("neverno")

// console.log(0 || "" || 2 || undefined || true || falsе);


let arr = [1,15,4],
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;    
}

console.log(arr);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);
