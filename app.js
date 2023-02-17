const formDOM = document.getElementById("form");
const nameDOM = document.getElementById("userName");
const passwordDOM = document.getElementById("password");
const emailDOM = document.getElementById("eMail");
const checkboxDOM = document.getElementById("checkbox");

let nameError = document.getElementById("nameError");
let passwordError = document.getElementById("passwordError");
let emailError = document.getElementById("emailError");
let checkboxError = document.getElementById("checkboxError");

function clearError(parametre) {
  parametre.innerHTML = "";
}

formDOM.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  if (passwordDOM.value === "" || passwordDOM.value === null) {
    passwordError.innerHTML = "Bu alan boş bırakılamaz!";
  } else if (passwordDOM.value.length < 8) {
    passwordError.innerHTML = "Şifre en az 8 karakter olmalı.";
  } else {
    passwordError.innerHTML = "";
  }

  if (nameDOM.value === "" || nameDOM.value === null) {
    nameError.innerHTML = "Bu alan boş bırakılamaz!";
  } else {
    nameError.innerHTML = "";
  }

  if (emailDOM.value === "" || emailDOM.value === null) {
    emailError.innerHTML = "Bu alan boş bırakılamaz!";
  } else if (!emailDOM.value.includes("@")) {
    emailError.innerHTML = "Mail adresi geçerli değil!";
  } else {
    emailError.innerHTML = "";
  }

  if (!checkboxDOM.checked) {
    checkboxError.innerHTML = "Siz Robot Musunuz ?!";
  } else {
    checkboxError.innerHTML = "Robot Değilsiniz :)";
  }
}