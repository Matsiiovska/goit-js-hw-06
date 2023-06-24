const wordCount = document.getElementById("validation-input");
const func = (evt) => {
    const theDateAttrib = Number(wordCount.dataset.length);
    const wordLeng = Number(wordCount.value.trim().length);

    if (wordLeng === theDateAttrib) {
        wordCount.classList.add('valid');
        wordCount.classList.remove('invalid');
    } else {
        wordCount.classList.remove('valid');
        wordCount.classList.add('invalid');     
}
}


wordCount.addEventListener("blur", func);
