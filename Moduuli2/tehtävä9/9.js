'use strict';

function even(array){
    const evennumbers = [];
    for (let num of array){
        if (num % 2 === 0){
            evennumbers.push(num);
        }
    }
    return evennumbers;
}

const numbers = [2, 43, 54, 543, 32, 324, 345, 23];
const enumbers = even(numbers);

console.log(numbers);
console.log(enumbers);