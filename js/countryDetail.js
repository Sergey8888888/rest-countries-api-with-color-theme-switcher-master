export function displayCountryDetail(selectedCountry,countries) {
  if (!selectedCountry) {
    console.error("selectedCountry is undefined");
    return;
  }
  const countryDetailContainer = document.getElementById(
    "country-detail-container"
  );
  countryDetailContainer.innerHTML = `<button id="back-btn" class="back-btn"><i class="ri-arrow-left-line"></i>Back</button>
  <div class="country-info">
    <div class="country-flag">
      <img src='${
        selectedCountry.flags.png
      }'>  
    </div>
    <div class="country-detail">
      <h2>${selectedCountry.name}</h2>
      <ul>
        <li><strong>Native Name:</strong> ${selectedCountry.nativeName}</li>
        <li><strong>Population:</strong> ${selectedCountry.population.toLocaleString()}</li>
        <li><strong>Region:</strong> ${selectedCountry.region}</li>
        <li><strong>Sub Region:</strong> ${selectedCountry.subregion}</li>
        <li><strong>Capital:</strong> ${selectedCountry.capital}</li>
        <li><strong>Top Level Domain:</strong> ${ 
          selectedCountry.topLevelDomain[0]
        }</li>
        <li><strong>Currency:</strong> ${
          selectedCountry.currencies[0].name
        }</li>  
        <li><strong>Languages:</strong> ${selectedCountry.languages
          .map((lang) => lang.name)
          .join(", ")}</li>
      </ul>
      ${
        selectedCountry.borders && selectedCountry.borders.length > 0
          ? `<div class="border-countries"><strong>Border Countries:</strong> ${selectedCountry.borders
              .map((border) => `<span>${border}</span>`)
              .join(", ")}</div>`
          : `<div><strong>Border Countries:</strong> None</div>`
      }
    </div>
  </div>`;
  const backbtn = countryDetailContainer.querySelector("#back-btn");
  backbtn.addEventListener("click", () => {
    countryDetailContainer.innerHTML = "";
    countryDetailContainer.classList.remove("show");
    countries.style.display = "grid";
  });
}
