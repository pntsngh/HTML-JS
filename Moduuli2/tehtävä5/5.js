'use strict';

let lista = []
let nro = parseInt(prompt('anna numero'));

while (true) {
    lista.push(nro);
    nro = parseInt(prompt('anna numero'));
    if (lista.includes(nro)) {
        break;
    }
}
lista.sort()
console.log(lista)