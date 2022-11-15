'use strict';

const lista = ['Johnny', 'DeeDee', 'Joey', 'Mark'];

function concat(lista) {
    for (let i = 0; i < lista.length; i++) {
        document.getElementById('target').innerText += lista[i];
    }
}

concat(lista);