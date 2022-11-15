'use strict';

const elkm = prompt('Ehdokkaiden määrä');

const ehdokkaat = [];

for (let i = 1; i <= elkm; i++) {
    const e = {nimi:prompt(`Ehdokas ${i}`), äänet:0};
    ehdokkaat.push(e);
}
//console.log(ehdokkaat[1].äänet+=1)
console.log(ehdokkaat);

const älkm = prompt('Äänestäjien määrä');

for (let i = 0; i < älkm; i++) {
    const ääni = ehdokkaat[prompt('Anna ehdokkaan nro')].äänet+=1;
}

