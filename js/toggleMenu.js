const menuBtn = document.querySelector("#menuBtn");
const menuBtnClose = document.querySelector("#menuBtnClose");
const menuMobile = document.querySelector("#menu-mobile");
const body = document.querySelector("body");
const logo = document.querySelector("#logo");

export const toggleMenu = () => {
   menuMobile.classList.toggle("menu--open");
   body.classList.toggle("overflowHidden");
   menuBtn.classList.toggle("display-none");
   menuBtnClose.classList.toggle("display-block");

   // console.log("in toggleMenu");
   logo.removeEventListener("click", toggleMenu);
};

menuBtn.addEventListener("click", () => {
   toggleMenu();

   menuBtnClose.addEventListener("click", toggleMenu);
   logo.addEventListener("click", toggleMenu);
});
