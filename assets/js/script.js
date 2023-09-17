const btnNavbar = document.querySelector(".navbar-res");
const sideBar = document.querySelector(".sidebar");
const navbarNav = document.querySelector(".sidebar__navbar-nav");

document.querySelector(".navbar-res").onclick = () => {
  sideBar.classList.toggle("active");
};

document.addEventListener("click", (event) => {
  if (!btnNavbar.contains(event.target)) {
    if (!sideBar.contains(event.target) || navbarNav.contains(event.target)) sideBar.classList.remove("active");
  }
});
