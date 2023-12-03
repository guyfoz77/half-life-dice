export function ResultsTable({ results }) {
  return (
    <div className="resultsTableComponent">
      <h4>Results</h4>
      <table>
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
      </table>
    </div>
  )
}