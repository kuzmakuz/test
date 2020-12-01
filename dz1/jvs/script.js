'use strict';

let money, time;

function start() {
    money = +prompt("Vash byudzhet na mesyac ?");
    time = prompt("Vvedite datu v formate YYYY-MM-DD");
    
    while(isNaN(money) || money == '' || money == null ){
        money = +prompt("Vash byudzhet na mesyac ?");
    }
}

start();

let appData = {
    byudzhet : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Vvedite obyazatelnuyu statyu rashodov v eton mesyace"),
                b = prompt("Vo skolko oboydetsya ?");
 
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b ;
            } else {        
            i = i - 1;
            }       
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.byudzhet / 30).toFixed();
        alert("Byudzhet na 1 den sostavlyaet : " + appData.moneyPerDay + " euro.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("min level dostatka")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Sredniy level dostatka")
        } else if (appData.moneyPerDay > 2000) {
            console.log("Vysokiy uroven dostatka")
        } else {
            console.log("Proizoshla oshibka")
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Kakova summa nakopleniy ?"),
                percent = +prompt("Pod kakoy procent ?");
            
            appData.monthIncome = save/100/12*percent;
            alert('Dohod s deposita ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
                appData.optionalExpenses[i] = prompt("Statya Neobyazatelnyh rashodov") ;
        }
    },
    chooseIncome: function() {
        let items = prompt('Chto prinesyot dopolnitelnyy dohod? (Perechislite cherez zapyatuyu)', '');
        if ((typeof(items)) === 'string' && items != '' && items != null) {
            appData.income = items.split(', ');
            appData.income.push(prompt('Mozhet chto-t eshe?'));
            appData.income.sort();
        } else {
            alert('OSHIBKA');
        }
        console.log('Dop Zarabotk:');
        appData.income.forEach(function(item, i) { console.log( (i + 1) + ':' + item)}); //element => console.log(i + element));
        console.log('Nasha Programma vklyuchaet dannyey:');
        for (let key in appData) {
            console.log(key);
        }    
        //});
    }    
};




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
// let i = 0;
// do {
//     let a = prompt("Vvedite obyazatelnuyu statyu rashodov v eton mesyace"),
//         b = prompt("Vo skolko oboydetsya ?");
//         if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//             console.log("done");
//             appData.expenses[a] = b ;
//         } else {        
//         }   
//         i++;
// } while (i < 2);