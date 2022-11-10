'use strict';

const rolls = prompt('Enter the amount of dice rolls.');

function rollDice() {
    return 1 + Math.floor(Math.random() * 6);
}
let sum = 0

for (let i = 0; i < rolls; i++) {
    sum += rollDice()
}

document.getElementById('target').innerText = `The sum of the numbers is ${sum}`;
