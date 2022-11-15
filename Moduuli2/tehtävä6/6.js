'use strict';

const lista = [];
function diceroll() {
    const heitto = lista.push(Math.floor(Math.random() * 6) + 1);
}

while (true) {
    diceroll();
    if (lista.includes(6)) {
        break;
    }
}

for (let numero of lista) {
    document.getElementById('target').innerHTML = `<ul>${lista}</ul>`;
}
console.log(lista)