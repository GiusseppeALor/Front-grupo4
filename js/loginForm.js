import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import {auth} from './firebase_conf.js'

const $loginForm = document.querySelector("#login-form");

$loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = $loginForm["login-mail"].value;
  const password = $loginForm["login-pass"].value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert("Ingresaste correctamente");
      window.open("./index.html", '_self');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error no haz podido ingresar");
    });
});
