import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import { auth } from "./firebase_conf.js";

const $signupForm = document.querySelector("#sign-form");

$signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = $signupForm["sign-mail"].value;
  const password = $signupForm["sign-pass"].value;

//   console.log(email, password);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Tu cuenta se ha creado satisfactoriamente");
      window.open("./index.html", "_self");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error");
      // ..
    });
});
