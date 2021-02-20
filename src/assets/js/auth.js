async function sendForm(form) {
    info.innerHTML = '';
    let formData = new FormData(form);
    let response = await fetch("php/auth_obr.php", {
        method: "POST"
        , body: formData
    });
    let result = await response.text();
    if (result == "success") location.href = "index.html";
    else info.innerHTML = `Логин или пароль введён неверно!`;
}
