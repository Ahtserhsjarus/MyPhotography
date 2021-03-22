const menuBtn = document.querySelector(".menu-icon span");
const navBtn = document.querySelector(".btn");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  navBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  navBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  cancelBtn.style.color = "#ff3d00";
};
searchBtn.onclick = () => {
  navBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
