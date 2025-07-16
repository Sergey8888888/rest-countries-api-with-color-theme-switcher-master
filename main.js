import { renderData } from "./js/render.js";
import { search } from "./js/search.js";
import { filterRegion } from "./js/filterRegion.js";
// import { displayCountryDetail } from "./js/countryDetail.js";
const darkModeBtn = document.getElementById("dark-mode-btn");
let currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  // console.log(currentTheme, "currentTheme");

  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    darkModeBtn.innerHTML = '<i class="ri-sun-fill"></i>Light Mode';
  }
}
darkModeBtn.addEventListener("click", () => {
  currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    darkModeBtn.innerHTML = '<i class="ri-moon-fill"></i>Dark Mode';
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    darkModeBtn.innerHTML = '<i class="ri-sun-fill"></i>Light Mode';
    localStorage.setItem("theme", "dark");
  }
});
renderData();
search();
filterRegion();
// displayCountryDetail();
  
