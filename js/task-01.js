"use strict";

const numbСategories = document.getElementById('categories').children.length;
console.log(`Number of categories: ${numbСategories}`);
const titleTextH = document.querySelectorAll('h2');
titleTextH.forEach((title) => {
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${title.nextElementSibling.children.length}`);   
});

