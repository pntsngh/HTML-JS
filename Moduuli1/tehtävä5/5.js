'use strict';

const num = parseInt(prompt('Enter a year.'))
if ((num % 4 == 0) && (num % 100 != 0) || (num % 400 == 0)) {
    document.querySelector('#target').innerHTML = `Year ${num} is a leap year.`
}
else {
        document.querySelector('#target').innerHTML = `Year ${num} is not a leap year.`
}