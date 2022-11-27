'use strict';

const laske = document.querySelector('#start');
const str = document.querySelector('#calculation');
const numbers = str.split(' ');

function funktio(){
    console.log(numbers[0])
}

laske.addEventListener('click', funktio);