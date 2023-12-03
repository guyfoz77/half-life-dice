export function rollDie(sides) {
  if (sides <= 1) {
    console.error('A die must have at least 2 sides')
    return null
  }
  const result = Math.floor(Math.random() * sides) + 1
  return result
}
