import { useState } from "react"

export function ResultsTable({ results }) {
  const [show, setShow] = useState(true)
  function handleShowHide() {
    setShow(!show)
  }
  return (
    <div className="resultsTableComponent component">
      <h4 onClick={handleShowHide}><span>Results</span>
        <span className="material-symbols-outlined">
          {(show) ? 'expand_more' : 'expand_less'}
        </span></h4>
      {show && <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Remaining Isotopes</th>
          </tr>
        </thead>
        <tbody>
          {results.map((isotopes, rollNumber) => (
            <tr key={rollNumber}>
              <td>{rollNumber}</td>
              <td>{isotopes}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  )
}