//burger
const menuBtn = document.querySelector("#menu-btn");
const menuMobile = document.querySelector("#menu-mobile");

console.dir(menuMobile);

const handleClick = () => {
   menuMobile.classList.toggle("menu--open");
};

menuBtn.addEventListener("click", handleClick);
//burger
