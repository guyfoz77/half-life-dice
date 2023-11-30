import { useState } from 'react'
import { rollDice, halfLifeStep } from './scripts/scripts'

function App() {
  return (
    <>
      <button onClick={() => halfLifeStep(100, 6)}>Click</button>
    </>
  )
}

export default App
