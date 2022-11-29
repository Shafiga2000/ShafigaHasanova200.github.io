const url = 'https://api.openweathermap.org/data/2.5/';
const key = '45f006a9f6651c2bd89393c3e1976b8c';

const cityName = document.getElementById('cityName');
const cityBtn = document.getElementById('cityBtn');
const validationForName = document.querySelector('.validationForName')
cityBtn.addEventListener('click', () => requestApiForCityName(cityName.value))


function requestApiForCityName(name) {
    if (name.trim().length != 0) {
    fetch(`${url}weather?q=${name}&appid=${key}&units=metric&lang=en`)
        .then(respons => respons.json())
        .then(result => weatherDetailsForCity(result))
}

else {
    validationForName.innerText = "Please write city name";
}
}
function weatherDetailsForCity(info) {
    console.log(info.name);
    console.log(Math.round(info.main.temp));
}

