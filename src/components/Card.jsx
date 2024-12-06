import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Search from './WeatherSearch'

function CardBootstrap() {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState('Roma')

  const styles = {
    background: 'rgb(255,255,255)',
    background:
      'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(232,232,232,1) 0%, rgba(48,228,255,1) 24%, rgba(216,92,255,1) 60%, rgba(155,44,255,1) 100%)',
    width: '20em',
    color: 'white',
    boxShadow: '1px 9px 38px 6px #000000',
  }

  useEffect(() => {
    const fetchWeather = async () => {
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

    fetchWeather()
  }, [city])

  const getWeatherImage = (description) => {
    if (description.includes('clear')) {
      return '/assets/sunny-3.png'
    } else if (description.includes('cloud')) {
      return '/assets/weather-icon-cloudy.png'
    } else if (description.includes('rain')) {
      return '/assets/rainy-clouds-color-stroke-dffe1c.png'
    } else if (description.includes('snow')) {
      return '/assets/6635320.png'
    } else {
      return ''
    }
  }

  return (
    <Card
      className="d-flex justify-content-center align-items-center"
      style={styles}
    >
      <Card.Body className="text-center">
        <Search setCity={setCity} />
        <Card.Title>
          {weatherData ? weatherData.name : 'Caricamento...'}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {weatherData
            ? `${weatherData.main.temp}°C`
            : 'Temperatura non disponibile'}
        </Card.Subtitle>
        <Card.Text>
          {weatherData ? (
            <>
              <img
                src={getWeatherImage(weatherData.weather[0].description)}
                alt={weatherData.weather[0].description}
                style={{ width: '100px', height: '100px' }}
              />
              <p>{weatherData.weather[0].description}</p>
            </>
          ) : (
            'Caricamento dei dati meteo...'
          )}
        </Card.Text>

        {/* Link alla pagina dei dettagli */}
        <Link to={`/weather/${weatherData ? weatherData.name : city}`}>
          <Card.Link>Dettagli</Card.Link>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default CardBootstrap
