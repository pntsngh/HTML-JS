'use strict';

const nappi = document.querySelector('#start');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');

function funktio(){
    const operation = document.getElementById('operation').value;
    if (operation==='add'){
        document.getElementById('result').innerHTML = Number(num1.value) + Number(num2.value);
    }
    if (operation==='multi'){
        document.getElementById('result').innerHTML = num1.value * num2.value;
    }
    if (operation==='sub'){
        document.getElementById('result').innerHTML = num1.value - num2.value;
    }
    if (operation==='div'){
        document.getElementById('result').innerHTML = num1.value / num2.value;
    }
}

nappi.addEventListener('click', funktio);
