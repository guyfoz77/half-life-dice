export function Buttons({ rollDice, reset }) {
  return (
    <div className="buttonsContainer">
      <button onClick={rollDice}>Roll</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}