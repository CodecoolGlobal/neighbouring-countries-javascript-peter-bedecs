'use strict';

const selectCountry = document.querySelector('#all');
let option;

for (let i = 0; i < countries.length; i++) {
        option = document.createElement('option');
        option.innerText = countries[i].name.common;
        selectCountry.appendChild(option);
    }

const countryDetails = document.querySelector('#country');
selectCountry.addEventListener('change', printDetails)
function printDetails() {
  countryDetails.innerHTML='';
  for (let i = 0; i < countries.length; i++) {
    if(selectCountry.selectedIndex - 1 === i) {
      const name = document.createElement('h1');
      name.innerText = countries[i].name.common;
      countryDetails.appendChild(name);
    }
  }
}
  console.log(countries.indexOf());
