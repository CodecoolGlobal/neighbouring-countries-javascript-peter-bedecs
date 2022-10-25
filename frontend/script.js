'use strict';

const selectCountry = document.querySelector('#all');
let option;

for (let i = 0; i < countries.length; i++) {
    option = document.createElement('option');
    option.innerText = countries[i].name.common;
    selectCountry.appendChild(option);
}

const countryDetails = document.querySelector('#country');
countryDetails.innerText = 'Select a country from the list!'
selectCountry.addEventListener('change', printDetails)
function printDetails() {
    countryDetails.innerHTML = '';
    let selectedCountryBorder;
    for (let i = 0; i < countries.length; i++) {
        if (selectCountry.selectedIndex - 1 === i) {
            let flag = document.createElement('img');
            flag.src = countries[i].flags.png;
            countryDetails.appendChild(flag);

            let nameCountry = document.createElement('h1');
            nameCountry.innerText = countries[i].name.common;
            countryDetails.appendChild(nameCountry);

            let region = document.createElement('h2');
            region.innerText = countries[i].region;
            countryDetails.appendChild(region);

            let subRegion = document.createElement('h3');
            subRegion.innerText = countries[i].subregion;
            countryDetails.appendChild(subRegion);

            let capitalCity = document.createElement('h4');
            capitalCity.innerText = countries[i].capital;
            countryDetails.appendChild(capitalCity);

            selectedCountryBorder = countries[i].borders;

        }
    }
    const largestPop = document.querySelector('#population');

    largestPop.addEventListener('click', getLargestPop);


    function getLargestPop() {
        let maxPop = 0;
        let maxCountry = '';
        for (let i = 0; i < countries.length; i++) {
            if (selectedCountryBorder.includes(countries[i].cca3)) {
                if (countries[i].population > maxPop) {
                    maxPop = countries[i].population;
                    maxCountry = countries[i].name.common;
                    console.log(maxPop);
                    console.log(maxCountry);
                }
            }

        }
        countryDetails.innerHTML = '';
        for (let j = 1; j < countries.length; j++) {
            if (countries[j].name.common === maxCountry) {
                selectCountry.selectedIndex = j + 1;
                let flag = document.createElement('img');
                flag.src = countries[j].flags.png;
                countryDetails.appendChild(flag);

                let nameCountry = document.createElement('h1');
                nameCountry.innerText = countries[j].name.common;
                countryDetails.appendChild(nameCountry);

                let region = document.createElement('h2');
                region.innerText = countries[j].region;
                countryDetails.appendChild(region);

                let subRegion = document.createElement('h3');
                subRegion.innerText = countries[j].subregion;
                countryDetails.appendChild(subRegion);

                let capitalCity = document.createElement('h4');
                capitalCity.innerText = countries[j].capital;
                countryDetails.appendChild(capitalCity);
            }
        }
    }

    const largestArea = document.querySelector('#area');

    largestArea.addEventListener('click', getLargestArea);
  
    function getLargestArea() {
      let maxArea = 0;
      let maxCountry = '';
      for (let i = 0; i < countries.length; i++) {
          if (selectedCountryBorder.includes(countries[i].cca3)) {
              if (countries[i].area > maxArea) {
                  maxArea = countries[i].area;
                  maxCountry = countries[i].name.common;
                  console.log(maxArea);
                  console.log(maxCountry);
              }
          }

      }
      countryDetails.innerHTML = '';
      for (let j = 1; j < countries.length; j++) {
          if (countries[j].name.common === maxCountry) {
            selectCountry.selectedIndex = j + 1;
              let flag = document.createElement('img');
              flag.src = countries[j].flags.png;
              countryDetails.appendChild(flag);

              let nameCountry = document.createElement('h1');
              nameCountry.innerText = countries[j].name.common;
              countryDetails.appendChild(nameCountry);

              let region = document.createElement('h2');
              region.innerText = countries[j].region;
              countryDetails.appendChild(region);

              let subRegion = document.createElement('h3');
              subRegion.innerText = countries[j].subregion;
              countryDetails.appendChild(subRegion);

              let capitalCity = document.createElement('h4');
              capitalCity.innerText = countries[j].capital;
              countryDetails.appendChild(capitalCity);
          }
      }
  }
}

