'use strict';

const target = document.querySelector('#target');
const nro = prompt('Enter number');

let prime = true;
for (let i = 2; i < nro; i++){
    if (nro % i === 0){
        prime = false;
        break;
    }
}

if (prime){
    target.innerHTML = `${nro} is a prime number`;
} else {
    target.innerHTML = `${nro} is not a prime number`;
}