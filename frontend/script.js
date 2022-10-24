'use strict';

const selectCountry = document.querySelector('#all');
let option;

for (let i = 0; i < countries.length; i++) {
        option = document.createElement('option');
        option.innerText = countries[i].name.common;
        selectCountry.appendChild(option);
    }

