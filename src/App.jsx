import { useState } from 'react'
import { rollDie } from './scripts/scripts'
import { ResultsTable } from './components/ResultsTable'
import { Graph } from './components/Graph'
import { Material } from './components/Material'
import { Options } from './components/Options'
import { Buttons } from './components/Buttons'
import { Credits } from './components/Credits'
import './App.css'

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
    setDice(initialDiceSetup())
    setDiceSices(newSides)
    setResults([initialDice])
  }
  return (
    <div className='mainContainer'>
      <Credits />
      <Buttons
        rollDice={rollDice}
        reset={reset} />
      <Options
        handleNumberOfDiceChange={handleNumberOfDiceChange}
        handleDiceSidesChange={handleDiceSidesChange}
        diceSides={diceSides} />
      <ResultsTable results={results} />
      <Graph data={results} />
      <Material dice={dice} />
    </div>
  )
}

export default App
