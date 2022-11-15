'use strict';

const lista = [];

const partisipants = prompt('Number of partisipants');

for (let i = 0; i < partisipants; i++) {
    lista.push(prompt('Enter name'));
}

for (let nimi of lista) {
    document.getElementById('target').innerHTML += `<ol>${nimi}</ol>`;
}