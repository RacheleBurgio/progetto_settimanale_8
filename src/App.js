import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import WeatherDetails from './components/dettagli'
import CardBootstrap from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  const styles = {
    backgroundColor: 'lightblue',
    minHeight: '100vh',
  }

  return (
    <Router>
      <div
        className="App d-flex justify-content-center align-items-center"
        style={styles}
      >
        <Routes>
          <Route path="/" element={<CardBootstrap />} />
          <Route path="/weather/:city" element={<WeatherDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
