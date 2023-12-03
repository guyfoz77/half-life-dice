import { useState } from 'react'
import { rollDie } from './scripts/scripts'
import { ResultsTable } from './components/ResultsTable'
import { Graph } from './components/Graph'

function App() {
  const diceSides = 10
  const [initialDice, setInitialDice] = useState(100)
  const [dice, setDice] = useState(initialDiceSetup)
  const [results, setResults] = useState([initialDice])

  function initialDiceSetup(numberOfDice = initialDice) {
    const startDice = []
    for (let i = 0; i < numberOfDice; i++) startDice.push(2)
    return startDice
  }

  function rollDice() {
    console.log(dice)
    const newDice = [...dice]
    const newResults = [...results]
    for (let i = 0; i < newDice.length; i++) {
      if (newDice[i] == 1) continue
      const diceRollResult = rollDie(diceSides)
      newDice[i] = diceRollResult
    }
    newResults.push(newDice.filter(dice => dice !== 1).length)
    setResults(newResults)
    setDice(newDice)
  }

  function rollDice20Times() {
    // const newResults = [...results]
    // const resultsToAdd = []
    // let newDiceRemaining = diceRemaining
    // for (let i = 0; i < 20; i++) {
    //   newDiceRemaining -= halfLifeStep(newDiceRemaining, diceSides)
    //   resultsToAdd.push(newDiceRemaining)
    // }
    // resultsToAdd.forEach(result => {
    //   newResults.push(result)
    // });
    // setDiceRemaining(newDiceRemaining)
    // setResults(newResults)
  }

  function reset() {
    setDice(initialDiceSetup())
    setResults([initialDice])
  }

  function handleNumberOfDiceChange(e) {
    const newNumber = e.target.value
    console.log(newNumber)
    const newNumberProcessed = Math.min(Math.max(0, Math.floor(newNumber)), 9999999) //number must be a positive integer
    e.target.value = newNumberProcessed
    setInitialDice(newNumberProcessed)
    setDice(initialDiceSetup(newNumberProcessed))
    setResults([newNumberProcessed])
  }

  return (
    <>
      <button onClick={rollDice}>Roll</button>
      {/* <button onClick={rollDice20Times}>Roll 20 times</button> */}
      <button onClick={reset}>Reset</button>
      <form action="">
        <label htmlFor='numberOfDice'>Number of dice:</label>
        <input type='number' id='numberOfDice' min={1} max={100000} defaultValue={100} onChange={(e) => handleNumberOfDiceChange(e)} />
      </form>
      <ResultsTable results={results} />
      <Graph data={results} />
    </>
  )
}

export default App
