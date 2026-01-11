const showData = (event)=>{
    event.preventDefault();

    const lat = parseFloat(document.getElementById("lan").value);
    const lon = parseFloat(document.getElementById("lon").value);

    const apiKey = "WE DONT TALK ANYMORE";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`


    fetch(apiUrl)
    .then(response=> response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Falló al obtener el clima. Por favor, inténtalo de nuevo.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit',showData);