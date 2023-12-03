export function Material({ dice }) {
  return (
    <div className="diceComponent">
      <h4>Dice</h4>
      <div className="diceContainer">
        {dice.map((number, index) => (
          <div key={index} className={`dice dice${number}`}>{number}</div>
        ))}
      </div>
    </div>
  )
}