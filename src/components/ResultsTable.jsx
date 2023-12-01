export function ResultsTable({ results }) {
  return (
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
  )
}