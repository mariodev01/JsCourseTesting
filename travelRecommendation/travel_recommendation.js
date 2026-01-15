const cardContainer = document.getElementById('cardContainer');

function showData(){
    const input = document.getElementById('txtValue').value.toLowerCase();

    cardContainer.innerHTML = '';

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data =>{
        const d = data.countries.find(item=> item.name.toLowerCase() === input)
        

        if(d){
            d.cities.forEach((c)=>{
                console.log(c.imageUrl);

                const templates = `<div class="card" style="width: 18rem;">
                            <img src="${c.imageUrl}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${c.name}</h5>
                                <p class="card-text">${c.description}</p>
                                <a href="#" class="btn btn-primary">Visit</a>
                            </div>
                        </div>`
                    cardContainer.innerHTML += templates
            })
        }else{
            console.log("Not found");
        }
    })
};


function clear(){
    cardContainer.innerHTML = '';
    //console.log("Hola");
}

document.getElementById('searchButton').addEventListener('click',showData);

document.getElementById('clearButton').addEventListener('click',clear);