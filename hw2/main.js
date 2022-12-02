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

//Wind Direction
function getDirection(degree) {
    if (degree == 0 || degree == 360) {
        windDirection.innerText = "North";
    }
    else if (degree > 0 && degree < 45) {
        windDirection.innerText = "NNE";
    }
    if (degree == 45) {
        windDirection.innerText = "NE";
    }
    if (degree > 45 && degree < 90) {
        windDirection.innerText = "ENE";
    }
    if (degree == 90) {
        windDirection.innerText = "East";
    }
    if (degree > 90 && degree < 135) {
        windDirection.innerText = "ESE";
    }
    if (degree == 135) {
        windDirection.innerText = "SE";
    }
    if (degree > 135 && degree < 180) {
        windDirection.innerHTML = "SSE";
    }
    if (degree == 180) {
        windDirection.innerText = "South";
    }
    if (degree > 180 && degree < 225) {
        windDirection.innerText = "SSW";
    }
    if (degree == 225) {
        windDirection.innerText = "SW";
    }
    if (degree > 225 && degree < 270) {
        windDirection.innerText = "WSW";
    }
    if (degree == 270) {
        windDirection.innerText = "West";
    }
    if (degree > 270 && degree < 315) {
        windDirection.innerText = "WNW";
    }
    if (degree == 315) {
        windDirection.innerText = "NW";
    }
    if (degree > 315 && degree < 360) {
        windDirection.innerText = "NNW";
    }
}




