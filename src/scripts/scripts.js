export function rollDie(sides) {
  if (sides <= 1) {
    console.error('A die must have at least 2 sides')
    return null
  }
  const result = Math.floor(Math.random() * sides) + 1
  return result
}

// export function halfLifeStep(startingDice, sides) {
//   let decayedDice = 0
//   for (let i = 0; i < startingDice; i++) {
//     const diceResult = rollDice(sides)
//     if (diceResult == 1) decayedDice++
//   }
//   return decayedDice
// }
