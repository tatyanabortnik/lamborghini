//burger
const menuBtn = document.querySelector("#menu-btn");
const menuLink = document.querySelector("#menu-link");
const menuMobile = document.querySelector("#menu-mobile");
const body = document.querySelector("body");

console.dir(menuMobile);

const handleClick = (e) => {
   const { target } = e;
   // console.log(target.nextElementSibling);
   // const dataNavigationId = target.dataset.navigationId;

   menuMobile.classList.toggle("menu--open");
   body.classList.toggle("overflowHidden");
   // if (dataNavigationId) menuMobile.classList.remove("menu--open");
};

menuBtn.addEventListener("click", handleClick);
//burger
