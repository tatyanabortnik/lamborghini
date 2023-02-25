const handleStickyHeader = (e) => {
   const header = document.querySelector("#header");

   header.classList.toggle(
      "sticky",
      window.scrollY > window.innerHeight - header.offsetHeight ||
         window.scrollY === window.innerHeight - header.offsetHeight
   );
};

document.addEventListener("scroll", handleStickyHeader);
