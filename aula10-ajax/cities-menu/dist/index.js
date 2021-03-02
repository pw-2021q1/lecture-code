"use strict";
function main() {
    const countriesSelect = document.getElementById("countries");
    const url = (countriesSelect === null || countriesSelect === void 0 ? void 0 : countriesSelect.getAttribute("data-url")) || "";
    countriesSelect === null || countriesSelect === void 0 ? void 0 : countriesSelect.addEventListener("change", async (ev) => {
        const iso = ev.target.value;
        const fullUrl = `${url}?iso=${iso}`;
        const response = await fetch(fullUrl);
        const citiesSelect = document.getElementById("cities");
        const clearSelect = (select) => {
            while (select.length > 0) {
                select.remove(0);
            }
        };
        clearSelect(citiesSelect);
        if (response.ok) {
            const cities = await response.json();
            for (const city of cities) {
                const option = document.createElement("option");
                option.value = city.name;
                option.textContent = city.name;
                citiesSelect === null || citiesSelect === void 0 ? void 0 : citiesSelect.appendChild(option);
            }
        }
        else {
            throw new Error(response.statusText);
        }
    });
}
window.onload = main;
