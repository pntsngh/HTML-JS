'use strict';

const name = prompt("What's your name?");
const houses = ["hufflepuff", "gryffindor", "ravenclaw", "slytherin"];
const item = houses[Math.floor(Math.random() * houses.length)];

document.querySelector('#target').innerHTML = name + ' ' + 'you are' + ' ' + item + '!';