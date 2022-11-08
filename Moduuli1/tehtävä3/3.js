let x,y,z;
x = prompt('Syötä kokonaisluku:');
y = prompt('Syötä toinen kokonaisluku:');
z = prompt('Syötä kolmas kokonaisluku:');

const summa = Number(x)+Number(y)+Number(z);
const tulo = Number(x)*Number(y)*Number(z);
const keskiarvo = (Number(x)+Number(y)+Number(z))/3;

document.querySelector('#target').innerHTML = 'Lukujen summa = ' + summa
document.querySelector('#target2').innerHTML = 'Lukujen tulo = ' +tulo
document.querySelector('#target3').innerHTML = 'Lukujen keskiarvo = ' + keskiarvo