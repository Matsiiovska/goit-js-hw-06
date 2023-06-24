const button1 = document.querySelector('[data-action="decrement"]');
const button2 = document.querySelector('[data-action="increment"]');
const spanLich = document.getElementById('value');
let counterValue = 0;



function onClickadd(event) {
    counterValue += 1;
    spanLich.textContent = counterValue;

}  

function onClickmin(event) {
    counterValue -= 1;
    spanLich.textContent = counterValue;

}

button1.addEventListener("click", onClickmin);
button2.addEventListener("click", onClickadd);
