async function getWeatherData(city){
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=7b0154a5196c4135a74133618231404&q=${city}`, {mode: 'cors'})
    let weatherData = await response.json();
    let cityName = weatherData.location.name
    let country = weatherData.location.country
    let condition = weatherData.current.condition.text
    let tempF = weatherData.current.temp_f
    let tempC = weatherData.current.temp_c
    let info = [cityName, country, condition, tempC, tempF]
    return info
}

export default getWeatherData