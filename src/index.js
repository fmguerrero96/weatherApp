import getWeatherData from "./modules/getData"

const searchButton = document.querySelector('.submitCity')
const searchCity = document.querySelector('.searchCity')
let city = document.querySelector('.city')
let country = document.querySelector('.country')
let degrees = document.querySelector('.degrees')
let condition = document.querySelector('.condition')

let currentCity = 'New York'

const weatherInfo = getWeatherData(currentCity)

weatherInfo.then(function(data){ 
    let info = data
    city.textContent = info[0]
    country.textContent = info[1]
    condition.textContent = info[2]
    degrees.textContent = info[3]
})

searchButton.addEventListener('click', () => {
    currentCity = searchCity.value
    getWeatherData(currentCity)

    const weatherInfo = getWeatherData(currentCity)

    weatherInfo.then(function(data){ 
        const info = data
        city.textContent = info[0]
        country.textContent = info[1]
        condition.textContent = info[2]
        degrees.textContent = info[3]
    })
    searchCity.value = ''
})


