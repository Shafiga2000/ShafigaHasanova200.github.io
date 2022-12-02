const url = 'https://api.openweathermap.org/data/2.5/';
const key = '45f006a9f6651c2bd89393c3e1976b8c';

//values
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let condition = document.querySelector(".condition");
let description = document.querySelector(".description");
let minmax = document.querySelector(".minmax");
let realFeel = document.querySelector(".real-feel");
let pressure = document.querySelector(".pressure");
let windSpeed = document.querySelector(".wind-speed");
let humidity = document.querySelector(".humidity");
let windDirection = document.querySelector(".wind-direction");
let responseTime = document.querySelector(".date-response")


const cityName = document.getElementById('cityName');
const cityBtn = document.getElementById('cityBtn');

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

//Get response date
function getResponseDate() {
    const utcStr = new Date();
    responseTime.innerText = utcStr.toLocaleTimeString();
}

//Validations
const validationForName = document.querySelector('.validationForName')
const validationForCoor = document.querySelector('.validationForCoor');
const validationForCurrLocation = document.querySelector(".validationForCurrentLocation");

function resetValidationForCityName() {
    lat.value = "";
    lon.value = "";
    validationForCoor.innerText = "";
    validationForCurrLocation.innerText = "";
}
function resetValidationForCurrLocation() {
    lat.value = "";
    lon.value = "";
    cityName.value = "";
    validationForCoor.innerText = "";
    validationForName.innerText = "";
}

function resetValidationForCorr() {
    cityName.value = '';
    validationForName.innerText = "";
    validationForCurrLocation.innerText = "";
}

//Reset all values
function resetValues() {
    city.innerText = "";
    temp.innerText = "";
    condition.innerText = "";
    description.innerText = "";
    minmax.innerText = "";
    realFeel.innerText = "";
    pressure.innerText = "";
    windSpeed.innerText = "";
    humidity.innerText = "";
    windDirection.innerText = "";
}



