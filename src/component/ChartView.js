import React from "react";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);


function ChartView() {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: 'right',
          },
          title: {
            display: true,
            text: "Sale Details",
            font: {
              size: 24,
            }
          },
          datalabels: {
            formatter: (value, ctx) => {
              if (ctx.chart.data.labels) {
                return ctx.chart.data.labels[ctx.dataIndex];
              }
            },
          },
        }
      };

    return (
        <div className="chart-container">
            <h5 style={{ textAlign: "center" }}>Pie Chart</h5>
            <Pie data={data} options= {options} />
        </div>
    );
}

export default ChartView;