function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector('.color');
const colorBth = document.querySelector('.change-color');
const body = document.body;/*Доступ до елемента body */



function ChangeBackgroundColor() {
  colorSpan.textContent = body.style.backgroundColor = getRandomHexColor(); 
}


colorBth.addEventListener("click", ChangeBackgroundColor);
