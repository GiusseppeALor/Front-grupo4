import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUoSHXQ6J1Iuw8BM8o6UqsZvTHjbAtaGY",
  authDomain: "usuario-8c011.firebaseapp.com",
  projectId: "usuario-8c011",
  storageBucket: "usuario-8c011.appspot.com",
  messagingSenderId: "807002968838",
  appId: "1:807002968838:web:36e1b085bf237fab964487",
};

export const app = initializeApp(firebaseConfig);
// console.log(app);
export const auth = getAuth(app);