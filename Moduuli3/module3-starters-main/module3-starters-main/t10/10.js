'use strict';

const enimi = document.querySelector('input[name="firstname"]');
const snimi = document.querySelector('input[name="lastname"]');
const nappi = document.querySelector('input[type="submit"]');
const tulostus = document.querySelector('#target');

nappi.addEventListener('click', function (evt){
    evt.preventDefault();
    tulostus.innerText = `Your name is ${enimi.value} ${snimi.value}.`;
});