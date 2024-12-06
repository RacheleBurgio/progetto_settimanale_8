import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function WeatherDetails() {
  const { city } = useParams()
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const fetchWeatherDetails = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c91f007b92f995e20b23af12d726673e&units=metric`
        )
        if (!response.ok) {
          throw new Error("Errore nella chiamata all'API")
        }
        const data = await response.json()
        setWeatherData(data)
      } catch (error) {
        console.error('Errore:', error)
      }
    }

    fetchWeatherDetails()
  }, [city])

  return (
    <div>
      <h1>Dettagli per {city}</h1>
      {weatherData ? (
        <>
          <h3>Temperatura: {weatherData.main.temp}°C</h3>
          <p>Descrizione: {weatherData.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
        </>
      ) : (
        <p>Caricamento dei dettagli...</p>
      )}
    </div>
  )
}

export default WeatherDetails
