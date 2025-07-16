import { createCard } from "./render.js";
const inputText = document.querySelector(".countryName-input");
const countries = document.querySelector(".countries");
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
export async function search() {
  const res = await fetch("data.json");
  const data = await res.json();
  inputText.addEventListener("input", async (e) => {
    e.preventDefault();
    const searchText = e.target.value.toLowerCase();
    if (searchText.trim() === "") {
      countries.innerHTML = data.map(createCard).join("");
      return;
    }

    //  console.log(data, "data");
    const dataFilter = data.filter((el) =>
      el.name.toLowerCase().includes(searchText)
    );
    console.log(dataFilter, "dataFilter");
    const card = dataFilter.map(createCard).join("");

    countries.innerHTML = card;
    if (dataFilter.length === 0) {
      countries.innerHTML = `<h2>Country not found</h2>`;
    }
  });
}
