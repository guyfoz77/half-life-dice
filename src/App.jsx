import { useState } from 'react'
import { rollDice, halfLifeStep } from './scripts/scripts'
import { ResultsTable } from './components/ResultsTable'

function App() {
  const diceSides = 10
  const [initialDice, setInitialDice] = useState(100)
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

  function reset() {
    setDiceRemaining(initialDice)
    setResults([initialDice])
  }

  function handleNumberOfDiceChange(e) {
    const newNumber = e.target.value
    const newNumberProcessed = Math.min(Math.max(0, Math.floor(newNumber)), 9999999) //number must be a positive integer
    e.target.value = newNumberProcessed
    setInitialDice(newNumberProcessed)
    setDiceRemaining(newNumberProcessed)
    setResults([newNumberProcessed])
  }

  return (
    <>
      <button onClick={rollDice}>Roll</button>
      <button onClick={rollDice20Times}>Roll 20 times</button>
      <button onClick={reset}>Reset</button>
      <form action="">
        <label htmlFor='numberOfDice'>Number of dice:</label>
        <input type='number' id='numberOfDice' min={1} max={100000} defaultValue={100} onChange={(e) => handleNumberOfDiceChange(e)} />
      </form>
      <ResultsTable results={results} />
    </>
  )
}

export default App
