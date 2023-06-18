const getWeatherData = (city) => {
    const url = `https://open-weather13.p.rapidapi.com/city/${city}`;
    const options = {
      method: 'GET',
      headers: {
            'X-RapidAPI-Key': '39a01f0f35mshda9ad0faee2bb31p14e983jsnfac3eb011d72',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
         }
    };
  
        const weatherPromise = fetch(url, options)
      return weatherPromise.then((response) => {
      return response.json();
    })
  }                            
                                 
  const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    const data = await getWeatherData(city)
    showWeatherData(data)
  }
  
  showWeatherData = (weatherData) => {
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
  }