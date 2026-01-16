const cardContainer = document.getElementById('cardContainer');

function showData() {
    const input = document.getElementById('txtValue').value.toLowerCase();

    cardContainer.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const d = data.countries.find(item => item.name.toLowerCase() === input)

            if (input === "beach" || input === "Beach" || input === "Beaches" || input === "beaches" || input === "Beache") {
                data.beaches.forEach((b) => {
                    const templates = `<div class="card" style="width: 18rem;">
                            <img src="${b.imageUrl}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${b.name}</h5>
                                <p class="card-text">${b.description}</p>
                                <a href="#" class="btn btn-primary">Visit</a>
                            </div>
                        </div>`
                    cardContainer.innerHTML += templates
                });
            } else if (input === "countries" || input === "country" || input === "Country" || input === "Countries") {
                data.countries.forEach((c) => {
                    c.cities.forEach((ci) => {
                        const templates = `<div class="card" style="width: 18rem;">
                            <img src="${ci.imageUrl}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${ci.name}</h5>
                                <p class="card-text">${ci.description}</p>
                                <a href="#" class="btn btn-primary">Visit</a>
                            </div>
                        </div>`
                        cardContainer.innerHTML += templates
                    })
                })
            } else if (input === "temples" || input === "temple" || input === "Temple" || input === "Temples") {
                data.temples.forEach((t) => {
                    const templates = `<div class="card" style="width: 18rem;">
                            <img src="${t.imageUrl}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${t.name}</h5>
                                <p class="card-text">${t.description}</p>
                                <a href="#" class="btn btn-primary">Visit</a>
                            </div>
                        </div>`
                    cardContainer.innerHTML += templates
                });
            } else {
                console.log("Not found");
            }
        })
};


function clear() {
    cardContainer.innerHTML = '';
}

document.getElementById('searchButton').addEventListener('click', showData);

document.getElementById('clearButton').addEventListener('click', clear);