const inputAccess = document.getElementById('font-size-control');
const spanAccess = document.getElementById('text');
const fontFunc = ({currentTarget}) => {
   (spanAccess.style.fontSize = `${currentTarget.value}px`);
   
}

inputAccess.addEventListener('input', fontFunc);
