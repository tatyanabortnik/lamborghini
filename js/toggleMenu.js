const menuBtn = document.querySelector("#menuBtn");
const menuBtnClose = document.querySelector("#menuBtnClose");
const menuMobile = document.querySelector("#menu-mobile");
const body = document.querySelector("body");

export const toggleMenu = () => {
   menuMobile.classList.toggle("menu--open");
   body.classList.toggle("overflowHidden");
   menuBtn.classList.toggle("display-none");
   menuBtnClose.classList.toggle("display-block");
};

menuBtn.addEventListener("click", () => {
   toggleMenu();

   menuBtnClose.addEventListener("click", toggleMenu);
});
