import { useState } from 'react'

const Search = ({ setCity }) => {
  const [inputValue, setInputValue] = useState('') // Stato per il valore dell'input

  const stylesInput = {
    borderRadius: '20px',
  }
  const stylesButton = {
    borderRadius: '20px',
  }

  // Funzione per gestire l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setCity(inputValue) // Aggiorna la città nel componente padre
      setInputValue('') // Resetta il campo input
    }
  }

  return (
    <form style={{ margin: '20px' }} onSubmit={handleSubmit}>
      <input
        style={stylesInput}
        type="text"
        className="cityInput"
        placeholder="cerca la città..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Aggiorna lo stato dell'input
      />
      <button type="submit" style={stylesButton}>
        <i className="bi bi-search"></i>
      </button>
    </form>
  )
}

export default Search
