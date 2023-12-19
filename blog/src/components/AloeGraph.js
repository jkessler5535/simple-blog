import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Container } from 'react-bootstrap';
import './AloeGraph.css';

const GraphChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: ['Dose 1', 'Dose 2', 'Dose 3', 'Dose 4', 'Dose 5'],
        datasets: [
          {
            label: 'Danger Level',
            data: [0, 30, 50, 70, 100],
            backgroundColor: 'rgba(31, 58, 147, 0.2)',
            borderColor: 'rgba(31, 58, 147, 1)',
            borderWidth: 1,
            pointBackgroundColor: 'rgba(31, 58, 147, 1)',
            pointBorderColor: '#fff',
            pointBorderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: 'Danger Level',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Dosage',
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Container className="my-4">
      <canvas ref={chartRef}></canvas>
    </Container>
  );
};

export default GraphChart;

