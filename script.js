/** @format */

let menu = document.querySelector(".open_menu");
let closeMenu = document.querySelector(".close_menu");
let sideNave = document.querySelector(".sideNav");
let sideNav_link = document.querySelectorAll(".sideNav_link");
menu.addEventListener("click", () => {
  sideNave.classList.add("sideNavjs");
});
closeMenu.addEventListener("click", () => {
  sideNave.classList.remove("sideNavjs");
});

for (let i = 0; i < sideNav_link.length; i++) {
  sideNav_link[i].addEventListener("click", () => {
    sideNave.classList.remove("sideNavjs");
  });
}
