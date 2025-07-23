import { displayCountryDetail } from "./countryDetail.js";
const countries = document.querySelector(".countries");

export function createCard(el, index) {
  return `
    <div class="box" data-index="${index}">
      <img src="${el.flags.png}" alt="${el.name}">
      <div class='box-item'>
      <h2>${el.name}</h2>
      <p><strong>Population</strong>: ${el.population}</p>
      <p><strong>Region</strong>: ${el.region}</p>
      <p><strong>Capital</strong>: ${el.capital}</p>
      </div>
    </div>
  `;
}

export async function renderData() {
  const res = await fetch("data.json");
  console.log(res, "res");
  
  const data = await res.json();
  console.log(data, "data");

  countries.innerHTML = data.map(createCard).join("");

  countries.addEventListener("click", (e) => {
    const card = e.target.closest(".box");
    if (!card) return; 

    const index = card.dataset.index;
    const country = data[index];

    countries.style.display = 'none';
    document.getElementById('country-detail-container').classList.add('show');

    displayCountryDetail(country,countries);
  });
}

