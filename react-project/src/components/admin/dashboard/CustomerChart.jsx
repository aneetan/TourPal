import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card, Typography } from 'antd';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const { Title } = Typography;

const CustomerChart = () => {
  // Data for the donut chart
  const data = {
    labels: ['Active Customers', 'Inactive Customers'],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: [
          '#f15d30', 
          '#BFBFBF', 
        ],
        borderColor: [
          '#ffffff',
          '#ffffff',
          '#ffffff',
        ],
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    },
  };

  return (
    <div style={{ height: '80%', position: 'relative' }}>
      <Doughnut data={data} options={options} />
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        marginBottom:"120px",
        transform: 'translate(-50%, -100%)',
        textAlign: 'center',
        pointerEvents: 'none',
      }}>
        <Title level={3} style={{ margin: 0 , fontFamily: "Poppins"}}>User Volume</Title>
      </div>
    </div>
  );
};

export default CustomerChart;