'use strict';

let lista = [];
let nro = parseInt(prompt('anna numero'));

while (nro !== 0) {
    lista.push(nro);
    nro = parseInt(prompt('anna numero'));
}

lista.sort();
lista.reverse();
console.log(lista);