// DOM (Document Object Model)

// DOM 접근 -1
//const h1= document.querySelector('#title');
//const items= document.querySelectorAll('li');

// 이전에는
const h1 = document.getElementById('title');
const items = document.getElementsByTagName('li');
const items2 = document.getElementsByClassName('list');


// DOM 조작
console.log(h1.textContent);
h1.textContent = "sihoon!"
h1.setAttribute('class','heading-1');

const first_item = document.querySelector('.first-item');
first_item.nextElementSibling