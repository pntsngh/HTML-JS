'use strict';
const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg',
    },
  },
  {
    title: 'Title 2',
    caption: 'Caption 2',
    description:
      'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    image: {
      large: 'img/pic2.jpg',
      medium: 'thumbnails/pic2.jpg',
    },
  },
  {
    title: 'Title 3',
    caption: 'Caption 3',
    description:
      'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    image: {
      large: 'img/pic3.jpg',
      medium: 'thumbnails/pic3.jpg',
    },
  },
  {
    title: 'Title 4',
    caption: 'Caption 4',
    description:
      'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    image: {
      large: 'img/pic4.jpg',
      medium: 'thumbnails/pic4.jpg',
    },
  },
  {
    title: 'Title 5',
    caption: 'Caption 5',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
    image: {
      large: 'img/pic5.jpg',
      medium: 'thumbnails/pic5.jpg',
    },
  },
  {
    title: 'Title 6',
    caption: 'Caption 6',
    description:
      'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
    image: {
      large: 'img/pic6.jpg',
      medium: 'thumbnails/pic6.jpg',
    },
  },
  {
    title: 'Title 7',
    caption: 'Caption 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic7.jpg',
      medium: 'thumbnails/pic7.jpg',
    },
  },
  {
    title: 'Title 8',
    caption: 'Caption 8',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic8.jpg',
      medium: 'thumbnails/pic8.jpg',
    },
  },
  {
    title: 'Title 9',
    caption: 'Caption 9',
    description:
      'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
    image: {
      large: 'img/pic9.jpg',
      medium: 'thumbnails/pic9.jpg',
    },
  },
];

// add your code here

for (let pic of picArray) {
  const article = document.createElement('article');
  article.innerText = pic.title;
  const figure = document.createElement('figure');
  const i = document.createElement('img');
  figure.appendChild(i);
  i.src = pic.image.medium;
  const fc = document.createElement('figcaption');
  figure.appendChild(fc);
  fc.innerText = pic.caption;
  article.appendChild(figure);
  const p = document.createElement('p');
  p.innerText = pic.description;
  article.appendChild(p);
  document.querySelector('#pictures').appendChild(article);
}

const dialog = document.querySelector('#dialog');
const artikkeli1 = document.querySelectorAll('article')[0];
const artikkeli2 = document.querySelectorAll('article')[1];
const artikkeli3 = document.querySelectorAll('article')[2];
const artikkeli4 = document.querySelectorAll('article')[3];
const artikkeli5 = document.querySelectorAll('article')[4];
const artikkeli6 = document.querySelectorAll('article')[5];
const artikkeli7 = document.querySelectorAll('article')[6];
const artikkeli8 = document.querySelectorAll('article')[7];
const artikkeli9 = document.querySelectorAll('article')[8];
const kuva = document.querySelector('#im');
const sulje = document.querySelector('#span');

artikkeli1.addEventListener('click', () => {
  kuva.src = picArray[0]["image"]["large"]
  kuva.alt = 'kuva1'
  dialog.showModal()
});
artikkeli2.addEventListener('click', () => {
  kuva.src = picArray[1]["image"]["large"]
  kuva.alt = 'kuva2'
  dialog.showModal()
});
artikkeli3.addEventListener('click', () => {
  kuva.src = picArray[2]["image"]["large"]
  kuva.alt = 'kuva3'
  dialog.showModal()
});
artikkeli4.addEventListener('click', () => {
  kuva.src = picArray[3]["image"]["large"]
  kuva.alt = 'kuva4'
  dialog.showModal()
});
artikkeli5.addEventListener('click', () => {
  kuva.src = picArray[4]["image"]["large"]
  kuva.alt = 'kuva5'
  dialog.showModal()
});
artikkeli6.addEventListener('click', () => {
  kuva.src = picArray[5]["image"]["large"]
  kuva.alt = 'kuva6'
  dialog.showModal()
});
artikkeli7.addEventListener('click', () => {
  kuva.src = picArray[6]["image"]["large"]
  kuva.alt = 'kuva7'
  dialog.showModal()
});
artikkeli8.addEventListener('click', () => {
  kuva.src = picArray[7]["image"]["large"]
  kuva.alt = 'kuva8'
  dialog.showModal()
});
artikkeli9.addEventListener('click', () => {
  kuva.src = picArray[8]["image"]["large"]
  kuva.alt = 'kuva9'
  dialog.showModal()
});

sulje.addEventListener('click', () => {
  dialog.close()
});


