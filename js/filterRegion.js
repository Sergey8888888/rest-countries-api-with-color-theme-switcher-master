import { createCard } from "./render.js";

const regionSelect = document.querySelector("#filter-input");
const countries = document.querySelector(".countries");

export async function filterRegion() {
  const res = await fetch("data.json");
  const data = await res.json();

  countries.innerHTML = data.map(createCard).join("");

  regionSelect.addEventListener("change", (e) => {
    const selectRegion = e.target.value;
    console.log(selectRegion, "selectRegion");
    

    if (selectRegion === "all") {
      countries.innerHTML = data.map(createCard).join("");
      return;
    }
    let filterData = data;

    if (selectRegion !== "all") {
      filterData = data.filter(
        (el) => el.region.toLowerCase() === selectRegion
      );
      countries.innerHTML = filterData.map(createCard).join("");
    }
  });
}

