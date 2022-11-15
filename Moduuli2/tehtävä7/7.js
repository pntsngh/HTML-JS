'use strict';

const lista = [];

function diceroll(sides) {
    lista.push(Math.floor(Math.random() * sides) + 1);
}

const sides = parseInt(prompt('Sivujen lkm'))

while (true) {
    diceroll(sides);
    if (lista.includes(sides)) {
        break;
    }
}

for (let numero of lista) {
    document.getElementById('target').innerHTML = `<ul>${lista}</ul>`;
}
console.log(lista)