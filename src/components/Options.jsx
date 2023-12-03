export function Options({ handleNumberOfDiceChange, handleDiceSidesChange, diceSides }) {
  return (
    <div className="optionsComponent">
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
    </div>
  )
}