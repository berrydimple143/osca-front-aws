import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Chart from 'chart.js/auto';
import { Bar, getElementsAtEvent } from 'react-chartjs-2';

const BarChart = ({
  graphLabels,
  graphValues,
  legendLabel,
  graphTitle,
  graphWidth,
  graphHeight,
  setLoading
}) =>
{
    const chartRef = useRef();
    const router = useRouter();
    let gLabels = graphLabels.split(",");
    let gValues = graphValues.split(",");
    let maxVal = Math.max(...gValues);

    const onClick = async (event) => {
      let points = getElementsAtEvent(chartRef.current, event);
      setLoading(true);
      if(points.length > 0) {
          let first = points[0];
          let municipality = data.labels[first.index];
          let ps = await router.push({
            pathname: '/admin/members',
            query: { municipality: municipality },
          });
          setLoading(false);
      }
    }

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
  const data = {
    labels: gLabels,
    datasets: [
      {
        label: legendLabel,
        data: gValues,
        backgroundColor: 'rgb(255,255,0, 0.5)',
        hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
        borderColor: '#7d4304',
        fill: true,
        borderWidth: 1
      },
    ],
  };
  return (
      <div>
          <Bar
            data={data}
            width={graphWidth}
            height={graphHeight}
            options={options}
            ref={chartRef}
            onClick={onClick}
            />
      </div>
  )
}

export default BarChart;
