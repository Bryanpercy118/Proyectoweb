const menu = document.querySelector(".menu");
const menuna = document.querySelector(".menu-navegacion");
console.log(menuna);
console.log(menu);

menu.addEventListener("click", () => {
  menuna.classList.toggle("spread");
});

window.addEventListener("click", e => {
  if (
    menuna.classList.contains('spread') && e.target != menuna &&
    e.target != menu
  ) {
    menuna.classList.toggle("spread");
  }
});
