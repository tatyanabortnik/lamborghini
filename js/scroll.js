const handleNavigationScroll = (e) => {
   const { target } = e;
   const dataNavigationId = target.dataset.navigationId;

   if (!dataNavigationId) return;

   e.preventDefault();
   const toElement = document.querySelector(`#${dataNavigationId}`);
   toElement?.scrollIntoView({ behavior: "smooth" });
};

document.addEventListener("click", handleNavigationScroll);
