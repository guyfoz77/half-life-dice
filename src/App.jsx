import { useState } from 'react'
import { rollDie } from './scripts/scripts'
import { ResultsTable } from './components/ResultsTable'
import { Graph } from './components/Graph'

function App() {
  const [diceSides, setDiceSices] = useState(6)
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

  // function rollDice20Times() {
  //   // const newResults = [...results]
  //   // const resultsToAdd = []
  //   // let newDiceRemaining = diceRemaining
  //   // for (let i = 0; i < 20; i++) {
  //   //   newDiceRemaining -= halfLifeStep(newDiceRemaining, diceSides)
  //   //   resultsToAdd.push(newDiceRemaining)
  //   // }
  //   // resultsToAdd.forEach(result => {
  //   //   newResults.push(result)
  //   // });
  //   // setDiceRemaining(newDiceRemaining)
  //   // setResults(newResults)
  // }

  function reset() {
    setDice(initialDiceSetup())
    setResults([initialDice])
  }

  function handleNumberOfDiceChange(e) {
    const newNumber = e.target.value
    setInitialDice(newNumber)
    setDice(initialDiceSetup(newNumber))
    setResults([newNumber])
  }
  function handleDiceSidesChange(e) {
    const newSides = e.target.value
    console.log(newSides)
    setDice(initialDiceSetup())
    setDiceSices(newSides)
    setResults([initialDice])
  }
  return (
    <>
      <button onClick={rollDice}>Roll</button>
      {/* <button onClick={rollDice20Times}>Roll 20 times</button> */}
      <button onClick={reset}>Reset</button>
      <form action="">
        <label htmlFor='numberOfDice'>Number of dice:</label>
        <select defaultValue={100} id="numberOfDice" onChange={(e) => handleNumberOfDiceChange(e)}>
          <option value={10}>10</option>
          <option value={100}>100</option>
          <option value={1000}>1000</option>
          <option value={10000}>10000</option>
          <option value={100000}>100000</option>
        </select>
        <label htmlFor='diceSides'>Number of sides on dice: {diceSides}</label>
        <input
          type="range"
          id="diceSides"
          min="2"
          max="20"
          step="1"
          defaultValue={6}
          onChange={(e) => handleDiceSidesChange(e)}
        />
      </form>
      <ResultsTable results={results} />
      <Graph data={results} />
    </>
  )
}

export default App
