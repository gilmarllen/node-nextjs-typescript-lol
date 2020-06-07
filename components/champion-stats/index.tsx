import { useRef, useEffect } from 'react';
import Chart from 'chart.js'

import { IInfo } from '../../interfaces/champions'

type Props = {
  data: IInfo
}

export default function InputSearch({ data }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const chartData = {
    labels: ['Attack', 'Defense', 'Magic', 'Difficulty'],
    datasets: [{
      backgroundColor: "rgba(200,0,0,0.2)",
      borderColor: "rgba(200,0,0,0.6)",
      radius: 5,
      pointRadius: 5,
      pointBorderWidth: 3,
      pointBackgroundColor: "orange",
      data: [data.attack, data.defense, data.difficulty, data.magic]
    }]
  }

  const chartOptions = {
    scale: {
      ticks: {
        display: false,
        beginAtZero: true,
        min: 0,
        max: 10,
        stepSize: 1
      },
      pointLabels: {
        fontSize: 14
      }
    },
    legend: {
      display: false
    }
  }
  

  useEffect(() => {
    // @ts-ignore
    const radarChart = new Chart(canvasRef.current, {
      type: 'radar',
      data: chartData,
      options: chartOptions
    })
  })
  

  return (
    <canvas ref={canvasRef} />
  )
}