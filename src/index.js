import getWeatherData from "./modules/getData"

const searchButton = document.querySelector('.submitCity')
const searchCity = document.querySelector('.searchCity')
let city = document.querySelector('.city')
let country = document.querySelector('.country')
let degrees = document.querySelector('.degrees')
let condition = document.querySelector('.condition')
let icon = document.querySelector('.icon')

let currentCity = 'New York'

const weatherInfo = getWeatherData(currentCity)

weatherInfo.then(function(data){ 
    let info = data
    let img = info[5]
    //let removeSlash = img.slice(2);
    //console.log(removeSlash)
    city.textContent = info[0]
    country.textContent = info[1]
    condition.textContent = info[2]
    degrees.textContent = info[3]
    icon.src = info[5]
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
        icon.src = info[5]
    })
    searchCity.value = ''
})

