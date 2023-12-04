import { Line } from "react-chartjs-2"
// eslint-disable-next-line no-unused-vars
import { Chart } from "chart.js/auto";
import { useState } from "react";

export function Graph({ data }) {
  const colors = { points: 'rgba(75,192,192,1)', text: '#adadad' }
  const [show, setShow] = useState(true)
  function handleShowHide() {
    setShow(!show)
  }

  const chartData = {
    labels: data.map((_, index) => index),
    datasets: [
      {
        label: 'Data Series',
        data: data,
        fill: true,
        borderColor: colors.points,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          // color: colors.text,
          display: true,
          text: 'Roll Number'
        }
      },
      y: {
        type: 'linear',
        position: 'left',
        title: {
          // color: colors.text,
          display: true,
          text: 'Isotopes Remaining'
        }
      },
    },
  };

  return (
    <div className="graphComponent component">
      <h4 onClick={handleShowHide}>Graph</h4>
      {show && <Line data={chartData} options={options} />}
    </div>
  )
}