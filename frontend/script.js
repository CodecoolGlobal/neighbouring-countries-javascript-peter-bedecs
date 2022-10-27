'use strict';

const selectCountry = document.querySelector('#all');
let option;
let historyArray = [];
let historyCounter = 0;

const toolbar = document.querySelector('#toolbar');
const prevButton = document.createElement('button');
prevButton.innerText = 'Previous country';
toolbar.appendChild(prevButton);
prevButton.id ='prev';
prevButton.disabled = true;


const nextButton = document.createElement('button');
nextButton.innerText = 'Next country';
toolbar.appendChild(nextButton);
nextButton.id = 'next';
nextButton.disabled = true;



prevButton.addEventListener('click', jumpToPrev);
function jumpToPrev() {
    countryDetails.innerHTML = '';
    let j = historyCounter - 2;
    let i = historyArray[j] - 1;
    selectCountry.selectedIndex = historyArray[historyCounter - 2];
    historyCounter--;
    prevNextButtonSwitch();
    printCountyDetails(i);
}

nextButton.addEventListener('click', jumpToNext);
function jumpToNext() {
    countryDetails.innerHTML = '';
    let j = historyCounter;
    let i = historyArray[j] - 1;
    selectCountry.selectedIndex = historyArray[historyCounter];
    historyCounter++;
    prevNextButtonSwitch();
    printCountyDetails(i);
}

for (let i = 0; i < countries.length; i++) {
    option = document.createElement('option');
    option.innerText = countries[i].name.common;
    selectCountry.appendChild(option);
}

const largestPop = document.querySelector('#population');
largestPop.disabled = true;
const largestArea = document.querySelector('#area');
largestArea.disabled = true;


const countryDetails = document.querySelector('#country');
countryDetails.innerText = 'Select a country from the list!';
selectCountry.addEventListener('change', printDetails)
function printDetails() {
    historyArray.push(selectCountry.selectedIndex);
    historyCounter++;
    countryDetails.innerHTML = '';
    let selectedCountryBorder;
    for (let i = 0; i < countries.length; i++) {
        if (selectCountry.selectedIndex - 1 === i) {
            printCountyDetails(i);

            selectedCountryBorder = countries[i].borders;
        }
        prevNextButtonSwitch()
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
                }
            }
        }

        countryDetails.innerHTML = '';
        for (let i = 1; i < countries.length; i++) {
            if (countries[i].name.common === maxCountry) {
                selectCountry.selectedIndex = i + 1;
                printCountyDetails(i);
            }
        }
        historyArray.push(selectCountry.selectedIndex);
        historyCounter++;
        prevNextButtonSwitch()
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
                }
            }
        }
        countryDetails.innerHTML = '';
        for (let i = 1; i < countries.length; i++) {
            if (countries[i].name.common === maxCountry) {
                selectCountry.selectedIndex = i + 1;
                printCountyDetails(i);
            }
        }
        historyArray.push(selectCountry.selectedIndex);
        historyCounter++;
        prevNextButtonSwitch()
    }
    if (typeof selectedCountryBorder === 'undefined'){
        largestPop.innerText = 'No neighbour';
        largestPop.disabled = true;
        largestArea.innerText = 'No neighbour';
        largestArea.disabled = true;
      } else {
        largestPop.innerText = 'Neighbour with the largest population';
        largestPop.disabled = false;
        largestArea.innerText = 'Neighbour with the largest area';
        largestArea.disabled = false;
      }
}

function prevNextButtonSwitch() {
    if (historyCounter < 2) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }
    if (historyCounter === historyArray.length) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

function printCountyDetails(i) {
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
}
