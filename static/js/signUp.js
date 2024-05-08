document.addEventListener("DOMContentLoaded", () => {
  let mail = document.getElementById("mail");
  let mail_err = document.getElementById("mail_error");
  let pass = document.getElementById("pass");
  let pass_err = document.getElementById("pass_error");

  function checkComponent(comp) {
    var text = comp.value;
    console.log("Text: " + text);
    if (text.length > 0) {
      return true;
    }
    return false;
  }

  function mailTest(correo) {
    const regexpr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regexpr.test(correo);
  }

  let button = document.getElementById("button");
  button.addEventListener("click", function () {
    mail_err.innerHTML = "";
    pass_err.innerHTML = "";
    switch (checkComponent(mail) && mailTest(mail.value)) {
      case true:
        if (checkComponent(pass)) {
          location.href = "/index.html";
        } else {
          pass_err.innerHTML = "introduce una contraseña";
        }
        break;
      case false:
        mail_err.innerHTML = "introduce un correo válido";
        if (!checkComponent(pass)) {
          pass_err.innerHTML = "introduce una contraseña";
        }
        break;
    }
  });
});
