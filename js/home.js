import navBar from "./navBar.js";

const d = document;

// for menu
const menu = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

d.addEventListener('DOMContentLoaded', (e) => {
    navBar(menu, close, nav);
})