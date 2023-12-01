import { useState } from 'react'
import { rollDice, halfLifeStep } from './scripts/scripts'
import { ResultsTable } from './components/ResultsTable'

function App() {
  const diceRemaining = 100
  // function rollDice

  const [results, setResults] = useState([diceRemaining])
  return (
    <>
      <button onClick={() => halfLifeStep(100, 6)}>Click</button>
      <ResultsTable results={results} />
    </>
  )
}

export default App
