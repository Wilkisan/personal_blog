async function sendForm(form) {
    let formData = new FormData(form);
    let response = await fetch("php/reg_obr.php", {
        method: "POST",
        body: formData
    });
    let result = await response.text();
    if (result == "success") {
        location.href = "signin.html";
    }
    else if (result == "exist") {
        info.innerText = `Такой пользователь уже есть!`;
    }
    else {
        console.log("Неизвестная ошибка");
    }
}
