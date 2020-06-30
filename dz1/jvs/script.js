'use strict';

let money = +prompt("Vash byudzhet na mesyac ?"),
     time = prompt("Vvedite datu v formate YYYY-MM-DD");

let appData = {
    byudzhet : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
}

// Cikl1
// for (let i = 0; i < 2; i++) {
//     let a = prompt("Vvedite obyazatelnuyu statyu rashodov v eton mesyace"),
//         b = prompt("Vo skolko oboydetsya ?");
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b ;
//     } else {        
//     }       
// }

// Cikl2
// let i = 0;
// while (i < 2) {
//     let a = prompt("Vvedite obyazatelnuyu statyu rashodov v eton mesyace"),
//         b = prompt("Vo skolko oboydetsya ?");
//         if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//             console.log("done");
//             appData.expenses[a] = b ;
//         } else {        
//         }   
//         i++;
// }

// Cikl3 
let i = 0;
do {
    let a = prompt("Vvedite obyazatelnuyu statyu rashodov v eton mesyace"),
        b = prompt("Vo skolko oboydetsya ?");
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b ;
        } else {        
        }   
        i++;
} while (i < 2);

appData.moneyPerDay = appData.byudzhet / 30;

alert("Byudzhet na 1 den : " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("min level dostatka")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Sredniy level dostatka")
} else if (appData.moneyPerDay > 2000) {
    console.log("Vysokiy uroven dostatka")
} else {
    console.log("Proizoshla oshibka")
}

console.log(appData.expenses);