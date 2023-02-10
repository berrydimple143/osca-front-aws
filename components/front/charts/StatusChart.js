import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import { Bar, getElementsAtEvent } from 'react-chartjs-2';

const StatusChart = ({
  reportGraphLabels,
  activeData,
  inactiveData,
  highRiskData,
  atRiskData,
  passedAwayData,
  graphTitle,
  graphWidth,
  graphHeight
}) =>
{
      let gLabels = reportGraphLabels.split(",");
      let activeValues = activeData.split(",");
      let inactiveValues = inactiveData.split(",");
      let atRiskValues = atRiskData.split(",");
      let highRiskValues = highRiskData.split(",");
      let passedAwayValues = passedAwayData.split(",");
      let gValues = [...activeValues, ...inactiveValues, ...atRiskValues, ...highRiskValues, ...passedAwayValues];
      let maxVal = Math.max(...gValues);
      let data = {
          labels: gLabels,
          datasets: [
            {
              label: 'Active',
              data: activeValues,
              backgroundColor: 'rgba(60, 255, 113, 0.5)',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Inactive',
              data: inactiveValues,
              backgroundColor: 'rgb(255,255,0, 0.5)',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'At Risk',
              data: atRiskValues,
              backgroundColor: 'rgb(0,0,255, 0.5)',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'High Risk',
              data: highRiskValues,
              backgroundColor: 'rgb(249,105,14, 0.5)',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Passed Away',
              data: passedAwayValues,
              backgroundColor: 'rgb(255,0,0, 0.9)',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
          ],
        };


    const options = {
      responsive: true,
      maintainAspectRatio: true,
      onHover: (event, chartElement) => {
          if(chartElement.length == 1) {
              event.native.target.style.cursor = 'pointer';
          } else {
              event.native.target.style.cursor = '';
          }
      },
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: graphTitle,
        },
      },
      scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: maxVal + 3,
            ticks: {
              callback: function(val, index) {
                return index % 2 === 0 ? this.getLabelForValue(val) : '';
              },
              color: '#7d4304',
            },
          },
      },
  };

  return (
      <div className="flex flex-col border mr-5 mb-3">
        <div className="pt-0 w-near-full">
            <Bar
              data={data}
              width={graphWidth}
              height={graphHeight}
              options={options}
              />
        </div>
      </div>
  )
}

export default StatusChart;
