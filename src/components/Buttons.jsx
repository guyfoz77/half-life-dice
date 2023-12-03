export function Buttons({ rollDice, reset }) {
  return (
    <div className="buttonsComponent">
      <button onClick={rollDice}>Roll</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}