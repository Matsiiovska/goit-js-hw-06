const textInput = document.getElementById("name-input");
const textSpan = document.getElementById("name-output");


const func = ({ currentTarget }) => {
    if (currentTarget.value.trim !== '') {
        textSpan.textContent =currentTarget.value.trim();    
    } else {
  textSpan.textContent = 'Anonymous';
    }
}


textInput.addEventListener("input", func);
