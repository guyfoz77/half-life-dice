import { useState } from "react"

export function Material({ dice }) {
  const [show, setShow] = useState(true)
  function handleShowHide() {
    setShow(!show)
  }

  return (
    <div className="diceComponent component">
      <h4 onClick={handleShowHide}>Dice
        <span className="material-symbols-outlined">
          {(show) ? 'expand_more' : 'expand_less'}
        </span></h4>
      {show && <div className="diceContainer">
        {dice.map((number, index) => (
          <div key={index} className={`dice dice${number}`}>{number}</div>
        ))}
      </div>}
    </div>
  )
}