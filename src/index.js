import getWeatherData from "./modules/getData"

const weatherInfo = getWeatherData('chicago')

weatherInfo.then(function(data){ 
    const info = data
    console.log(info)
})

