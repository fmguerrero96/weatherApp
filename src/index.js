import getWeatherData from "./modules/getData"

let currentCity = 'New York'

const searchButton = document.querySelector('.submitCity')
const city = document.querySelector('.searchCity')

const weatherInfo = getWeatherData(currentCity)

weatherInfo.then(function(data){ 
    const info = data
    console.log(info)
})

searchButton.addEventListener('click', () => {
    currentCity = city.value
    console.log(currentCity)
    getWeatherData(currentCity)

    const weatherInfo = getWeatherData(currentCity)

    weatherInfo.then(function(data){ 
        const info = data
        console.log(info)
    })
    city.value = ''
})


