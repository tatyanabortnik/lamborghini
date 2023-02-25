import { toggleMenu } from "./toggleMenu.js";

const handleNavigationScroll = (e) => {
   const { target } = e;
   const dataNavigationId = target.dataset.navigationId;
   const header = document.querySelector("#header");
   const toElement = document.querySelector(`#${dataNavigationId}`);

   if (!dataNavigationId) return;

   e.preventDefault();

   if (toElement.id === "evo-video") {
      toElement.scrollIntoView({ behavior: "smooth", block: "center" });
   } else {
      window.scroll({
         top: toElement.offsetTop - header.offsetHeight + 1,
         behavior: "smooth",
      });
   }

   if (target.offsetParent.classList.value.includes("menu--open")) toggleMenu();
};

document.addEventListener("click", handleNavigationScroll);
