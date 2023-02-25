const handleNavigationScroll = (e) => {
   console.dir(e.target.offsetParent);

   const { target } = e;
   const dataNavigationId = target.dataset.navigationId;
   const body = document.querySelector("body");
   const header = document.querySelector("#header");
   const toElement = document.querySelector(`#${dataNavigationId}`);

   if (!dataNavigationId) return;

   e.preventDefault();
   if (toElement.id === "evo-video") {
      toElement.scrollIntoView({ behavior: "smooth", block: "center" });
   } else {
      window.scroll({
         top: toElement.offsetTop - header.offsetHeight + 2,
         behavior: "smooth",
      });
   }

   if (target.offsetParent.classList.value.includes("menu--open")) {
      target.offsetParent.classList.remove("menu--open");
      body.classList.remove("overflowHidden");
   }
};

document.addEventListener("click", handleNavigationScroll);

const handleStickyHeader = (e) => {
   const header = document.querySelector("#header");

   header.classList.toggle(
      "sticky",
      window.scrollY > window.innerHeight - header.offsetHeight ||
         window.scrollY === window.innerHeight - header.offsetHeight
   );

   // console.log(window);
   // window.scrollY === "100vh" && console.log("yes");

   // console.log(document.body.clientHeight);
};

document.addEventListener("scroll", handleStickyHeader);
