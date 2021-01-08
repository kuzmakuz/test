// let age = document.getElementById('age'),
//     agef = showUser.bind(age);
// function showUser(surname, name) {
//     alert("User " + surname + " " + name + ", ego age " + this.value);
// }

// agef( 'Familiya', 'imya');

'use strict'
function hello() {
    console.log(this);
}

hello();