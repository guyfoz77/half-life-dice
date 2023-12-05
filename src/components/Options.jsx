import { useState } from "react"

export function Options({ handleNumberOfDiceChange, handleDiceSidesChange, diceSides }) {
  const [show, setShow] = useState(true)
  function handleShowHide() {
    setShow(!show)
  }
  return (
    <div className="optionsComponent component">
      <h4 onClick={handleShowHide}>Options
        <span className="material-symbols-outlined">
          {(show) ? 'expand_more' : 'expand_less'}
        </span></h4>
      {show && <form action="">
        <label htmlFor='numberOfDice'>Number of dice:</label>
        <select defaultValue={100} id="numberOfDice" onChange={(e) => handleNumberOfDiceChange(e)}>
          <option value={10}>10</option>
          <option value={100}>100</option>
          <option value={1000}>1000</option>
          <option value={10000}>10000</option>
          {/* <option value={100000}>100000</option> */}
        </select>
        <label htmlFor='diceSides'>
          {(diceSides == 2) ? 'Using a coin.' : `Using ${diceSides} sided dice.`}
        </label>
        <input
          type="range"
          id="diceSides"
          min="2"
          max="20"
          step="1"
          defaultValue={6}
          onChange={(e) => handleDiceSidesChange(e)}
        />
      </form>}
    </div>
  )
}