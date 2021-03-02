function main() {
    const countriesSelect = document.getElementById("countries")
    const url = countriesSelect?.getAttribute("data-url") || ""

    countriesSelect?.addEventListener("change", async (ev) => {
            const iso = (ev.target as HTMLSelectElement).value
            const fullUrl = `${url}?iso=${iso}`

            const response = await fetch(fullUrl)
            const citiesSelect = document.getElementById("cities")
            const clearSelect = (select: HTMLSelectElement) => {
                while (select.length > 0) {
                    select.remove(0)
                }
            }

            clearSelect(citiesSelect as HTMLSelectElement)
            if (response.ok) {
                const cities = await response.json()

                for (const city of cities) {
                    const option = document.createElement("option")

                    option.value = city.name
                    option.textContent = city.name
                    citiesSelect?.appendChild(option)
                }
            } else {
                throw new Error(response.statusText)
            }
        })
}

window.onload = main