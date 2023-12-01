import { useState } from 'react'
import { rollDice, halfLifeStep } from './scripts/scripts'
import { ResultsTable } from './components/ResultsTable'

function App() {
  let initialDice = 5000
  const diceSides = 10
  const [diceRemaining, setDiceRemaining] = useState(initialDice)
  const [results, setResults] = useState([initialDice])

  function rollDice() {
    const newResults = [...results]
    const decayedDice = halfLifeStep(diceRemaining, diceSides)
    const newDiceRemaining = diceRemaining - decayedDice
    newResults.push(newDiceRemaining)
    setDiceRemaining(newDiceRemaining)
    setResults(newResults)
  }

  function rollDice20Times() {
    const newResults = [...results]
    const resultsToAdd = []
    let newDiceRemaining = diceRemaining
    for (let i = 0; i < 20; i++) {
      newDiceRemaining -= halfLifeStep(newDiceRemaining, diceSides)
      resultsToAdd.push(newDiceRemaining)
    }
    resultsToAdd.forEach(result => {
      newResults.push(result)
    });
    setDiceRemaining(newDiceRemaining)
    setResults(newResults)
  }

  return (
    <>
      <button onClick={rollDice}>Click</button>
      <button onClick={rollDice20Times}>Roll 20 times</button>
      <ResultsTable results={results} />
    </>
  )
}

export default App
