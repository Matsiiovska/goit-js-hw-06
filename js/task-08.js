const loginForm = document.querySelector(".login-form");
/*console.dir(loginForm);*/
loginForm.addEventListener('submit', FormRelease);

function FormRelease(el) {
    el.preventDefault();/*Зупиняє подію браузера*/
    const { email, password } = el.currentTarget.elements;
    if (!email.value.trim() || !password.value.trim()) {
        return alert("всі поля повинні бути заповнені");
    } else {
        const formData = {
            email: email.value,
            password: password.value,
        };
        console.log(formData);
        el.currentTarget.reset();
    }
}


