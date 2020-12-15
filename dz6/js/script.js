let five = document.createElement('li'),
    menu = document.querySelector('.menu'),
    colm = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    titl = document.getElementById('title'),
    quest = prompt('Vashe otnosheniye k tehnike Apple?'),
    prom = document.getElementById('prompt');

five.classList.add('menu-item');    
five.innerHTML = 'Pyatyy пункт';
menu.appendChild(five);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

titl.innerHTML = 'Мы продаем только original технику Apple';

colm[1].removeChild(adv);

prom.innerHTML = quest;

