//Ipt
const iptName = document.getElementById("iptName");
const iptLastName = document.getElementById("iptLastName");
const iptEmail = document.getElementById("iptEmail");
const iptPhone = document.getElementById("iptPhone");
const txtMessage = document.getElementById("txtMessage");
const formContact=document.getElementById("formContact");

//btn
const btnContact = document.getElementById("btnContact");
const btnClear = document.getElementById("btnClear");


//alerts
const alertName = document.getElementById("alertName");
const alertLastName = document.getElementById("alertLastName");
const alertPhone = document.getElementById("alertPhone");
const alertEmail = document.getElementById("alertEmail");
const alertMessage = document.getElementById("alertMessage");


//regex
const regexName = (/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]{2,30}$/);
const regexEmail = (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
const regexPhone = (/^\+?[1-9]\d{1,14}$/);

emailjs.init({
    publicKey: "WI66fCabzg5tgV1LP"
});//emailjs



btnContact.addEventListener("click", () => {


    isValidName(iptName.value);

    isValidLastName(iptLastName.value);

    isValidEmail(iptEmail.value);

    isValidPhone(iptPhone.value);

    isValidMessage(txtMessage.value);

    if (isValidName(iptName.value) && isValidLastName(iptLastName.value)
        && isValidEmail(iptEmail.value) && isValidPhone(iptPhone.value)
        && isValidMessage(txtMessage.value)) {

            sendEmail();
            btnClear.onclick;
            clearForm();
    }//if



});//btnContact

btnClear.addEventListener("click", ()=>{
clearForm();
});


function isValidName(name) {
    let isValid;

    if (name !== "") {
        if (!regexName.test(name)) {
            alertName.style.display = "block";
            alertName.innerHTML = "Ingresa un formato válido";
            isValid = false;
        } else {
            alertName.style.display = "none";
            isValid = true;
        }
    } else {
        alertName.style.display = "block";
        alertName.innerHTML = "Ingresa un nombre";
        isValid = false;
    }//else

    return isValid;
}//isValidName

function isValidLastName(lastName) {
    let isValid;

    if (lastName !== "") {
        if (!regexName.test(lastName)) {
            alertLastName.style.display = "block";
            alertLastName.innerHTML = "Ingresa un formato válido";
            isValid = false;
        } else {
            alertLastName.style.display = "none";
            isValid = true;
        }
    } else {
        alertLastName.style.display = "block";
        alertLastName.innerHTML = "Ingresa tu apellido";
        isValid = false;
    }//else

    return isValid;
}//isValidLastName

function isValidEmail(email) {
    let isValid;

    if (email !== "") {
        if (!regexEmail.test(email)) {
            alertEmail.style.display = "block";
            alertEmail.innerHTML = "Ingresa un formato de válido";
            isValid = false;
        } else {
            alertEmail.style.display = "none";
            isValid = true;
        }//else
    } else {
        alertEmail.style.display = "block";
        alertEmail.innerHTML = "Ingresa tu correo";
        isValid = false;
    }//else

    return isValid;
}//isValidEmail


function isValidPhone(phone) {
    let isValid;

    if (phone !== "") {
        if (!regexPhone.test(phone)) {
            alertPhone.style.display = "block";
            alertPhone.innerHTML = "Ingresa un formato de válido";
            isValid = false;
        } else {
            alertPhone.style.display = "none";
            isValid = true;
        }//else
    } else {
        alertPhone.style.display = "block";
        alertPhone.innerHTML = "Ingresa tu teléfono";
        isValid = false;
    }//else

    return isValid;
}//isValidPhone

function isValidMessage(message) {
    let isValid;

    if (message === "") {
        alertMessage.style.display = "block";
        alertMessage.innerHTML = "Ingresa tu mensaje";
        isValid = false;
    } else {
        alertMessage.style.display = "none";
        isValid = true;
    }//else

    return isValid;
}//isValidMessage

function clearForm(){
     formContact.reset();

    alertName.style.display="none";
    alertLastName.style.display="none";
    alertEmail.style.display="none";
    alertPhone.style.display="none";
    alertMessage.style.display="none";

}

function sendEmail() {

    const parametros = {
        name: iptName.value,
        lastName: iptLastName.value,
        phone: iptPhone.value,
        email: iptEmail.value,
        message: txtMessage.value
    };

    emailjs.send("service_hhdyuyq",
        "template_jpvejj7",
        parametros
    )

        .then(() => {
            alert("Correo enviado");
        })
        .catch(() => {
            alert("No se pudo enviar el correo");
        });
}//sendEmail




