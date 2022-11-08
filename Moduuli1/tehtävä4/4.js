const name = prompt("What's your name?");
var houses = ["hufflepuff", "gryffindor", "ravenclaw", "slytherin"];
var item = houses[Math.floor(Math.random() * houses.length)];

document.querySelector('#target').innerHTML = name + ' ' + 'you are' + ' ' + item + '!';