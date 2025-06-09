
const form = document.getElementById("sign-form");
const mail = document.getElementById("sign-mail");
const username = document.getElementById("name");
const phone = document.getElementById("phone");
const pass = document.getElementById("sign-pass");
const pass_2 = document.getElementById("pass_2");

form.addEventListener("submit", (e) => {
   e.preventDefault();

   // let check = checkInputs();
   // console.log(check);
   checkInputs();
 });

 function checkInputs() {
   // get the values from the inputs

   const usernameValue = username.value.trim();
   const emailValue = mail.value.trim();
   const phoneValue = phone.value.trim();
   const passValue = pass.value.trim();
   const pass_2Value = pass_2.value.trim();

   if (usernameValue === "") {
     // show error
     // add error class

     setErrorFor(username, "Debe escribir el nombre de usuario");
   } else {
     // add success class
     setSuccessFor(username);
   }

   if (emailValue === "") {
     setErrorFor(mail, "Debes completar el campo del correo");
   } else if (!isEmail(emailValue)) {
     setErrorFor(mail, "Correo no valido");
   } else {
     setSuccessFor(mail);
   }

   if (phoneValue === "") {
     setErrorFor(phone, "Debes completar el campo del telefono");
   } else if (!isPhone(phoneValue)) {
     setErrorFor(phone, "El numero de tener 9 digitos y empezar con 9");
   } else {
     setSuccessFor(phone);
   }

   if (passValue === "") {
     setErrorFor(pass, "El campo debe ser llenado");
   } else {
     setSuccessFor(pass);
   }

   if (pass_2Value === "") {
     setErrorFor(pass_2, "El campo debe ser llenado");
   } else if (passValue !== pass_2Value) {
     setErrorFor(pass_2, "Las contraseñas no coincide");
   } else {
     setSuccessFor(pass_2);
   }
 }

 function setErrorFor(input, message) {
   const formControl = input.parentElement;
   const small = formControl.querySelector("small");

   //   add Error message inside small
   small.innerText = message;

   //   add error class
   formControl.className = "inputs-container error";
   return false;
 }

 function setSuccessFor(input) {
   const formControl = input.parentElement;
   formControl.className = "inputs-container success";
   return true;
 }

 function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
     email
   );
 }

 function isPhone(phoneNumber) {
   return /9[0-9]{8}/.test(phoneNumber);
 }