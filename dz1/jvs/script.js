'use strict';

let money = prompt("Vash byudzhet na mesyac ?"),
     time = prompt("Vvedite datu v formate YYYY-MM-DD");

let appData = {
    byudzhet : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
}

let a1 = prompt("Vvedite obyazatelnuyu statyu rashodov v eton mesyace"),
    a2 = prompt("Vo skolko oboydetsya ?"),
    a3 = prompt("Vvedite obyazatelnuyu statyu rashodov v eton mesyace"),
    a4 = prompt("Vo skolko oboydetsya ?");

appData.expenses[a1] = a2 ;
appData.expenses[a3] = a4 ;


alert("Byudzhet na 1 den : " + (appData.byudzhet/30));



console.log(appData.expenses);