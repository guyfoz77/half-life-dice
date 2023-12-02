import { Line } from "react-chartjs-2"
// eslint-disable-next-line no-unused-vars
import { Chart } from "chart.js/auto";

export function Graph({ data }) {
  const colors = { points: 'rgba(75,192,192,1)', text: '#adadad' }

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
    <Line data={chartData} options={options} />
  )
}