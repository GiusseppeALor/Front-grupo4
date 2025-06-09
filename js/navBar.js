export default function navBar(menu, close, nav) {
    if (menu) {
      menu.addEventListener("click", () => {
        nav.classList.add("active");
      });
    }

    if (close) {
      close.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    }
}