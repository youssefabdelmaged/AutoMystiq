const toggle_Btn = document.querySelector(".toggle_btn");
const toggle_BtnIcon = document.querySelector(".toggle_btn i");
const dropDownMenu = document.querySelector(".dropdown_menu");

toggle_Btn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggle_BtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
//-----------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let counter = 1;

  setInterval(() => {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${-counter * 100}%)`;
    counter++;

    if (counter == slider.children.length - 1) {
      setTimeout(() => {
        slider.style.transition = "none";
        slider.style.transform = "translateX(0)";
        counter = 1;
      }, 800);
    }
  }, 2000);
});
