import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import { Bar, getElementsAtEvent } from 'react-chartjs-2';

const ReportChart = ({
  reportGraphLabels,
  activeData,
  inactiveData,
  highRiskData,
  atRiskData,
  passedAwayData,
  employedData,
  unemployedData,
  selfEmployedData,
  elementaryData,
  highSchoolData,
  collegeData,
  vocationalData,
  masterDegreeData,
  doctoralData,
  singleData,
  marriedData,
  divorcedData,
  separatedData,
  widowedData,
  maleData,
  femaleData,
  catholicData,
  iglesiaData,
  baptistData,
  adventistData,
  jilData,
  victoryData,
  cocData,
  islamData,
  buddhistData,
  methodistData,
  othersData,
  indigentData,
  pensionerData,
  supportedData,
  pwdData,
  alzheimerData,
  arthritisData,
  cancerData,
  kidneyData,
  pulmonaryData,
  diabetesData,
  heartData,
  cholesterolData,
  pneumoniaData,
  osteoporosisData,
  otherIllnessData,
  graphTitle,
  graphWidth,
  graphHeight,
  reportPage
}) =>
{
    let gLabels = reportGraphLabels.split(",");
    let data = {};
    let maxVal = 5;

    if(reportPage == "Member Status") {
        let activeValues = activeData.split(",");
        let inactiveValues = inactiveData.split(",");
        let atRiskValues = atRiskData.split(",");
        let highRiskValues = highRiskData.split(",");
        let passedAwayValues = passedAwayData.split(",");
        let gValues = [...activeValues, ...inactiveValues, ...atRiskValues, ...highRiskValues, ...passedAwayValues];
        maxVal = Math.max(...gValues);
        data = {
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
    } else if(reportPage == "Employment Status") {
        let employedValues = employedData.split(",");
        let unemployedValues = unemployedData.split(",");
        let selfEmployedValues = selfEmployedData.split(",");
        let gValues = [...employedValues, ...unemployedValues, ...selfEmployedValues];
        maxVal = Math.max(...gValues);
        data = {
          labels: gLabels,
          datasets: [
            {
              label: 'Employed',
              data: employedValues,
              backgroundColor: 'rgba(0, 255, 0, 0.8)',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Unemployed',
              data: unemployedValues,
              backgroundColor: 'rgb(255, 0, 0, 0.8)',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Self-Employed',
              data: selfEmployedValues,
              backgroundColor: 'rgb(0, 0, 255, 0.8)',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
          ],
        };
    } else if(reportPage == "Educational Attainment") {
        let elementaryValues = elementaryData.split(",");
        let highSchoolValues = highSchoolData.split(",");
        let collegeValues = collegeData.split(",");
        let vocationalValues = vocationalData.split(",");
        let masterDegreeValues = masterDegreeData.split(",");
        let doctoralValues = doctoralData.split(",");
        let gValues = [...elementaryValues, ...highSchoolValues, ...collegeValues, ...vocationalValues, ...masterDegreeValues, ...doctoralValues];
        maxVal = Math.max(...gValues);
        data = {
          labels: gLabels,
          datasets: [
            {
              label: 'Elementary',
              data: elementaryValues,
              backgroundColor: 'rgba(255, 20, 20, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'High School',
              data: highSchoolValues,
              backgroundColor: 'rgba(10, 10, 255, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'College',
              data: collegeValues,
              backgroundColor: 'rgba(80, 0, 0, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#000',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Vocational',
              data: vocationalValues,
              backgroundColor: 'rgba(0, 255, 0, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: "Master's Degree",
              data: masterDegreeValues,
              backgroundColor: '#FF00FF',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Doctoral',
              data: doctoralValues,
              backgroundColor: '#FFE900',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
          ],
        };
    } else if(reportPage == "Civil Status") {
        let singleValues = singleData.split(",");
        let marriedValues = marriedData.split(",");
        let widowedValues = widowedData.split(",");
        let separatedValues = separatedData.split(",");
        let divorcedValues = divorcedData.split(",");
        let gValues = [...singleValues, ...marriedValues, ...widowedValues, ...separatedValues, ...divorcedValues];
        maxVal = Math.max(...gValues);
        data = {
          labels: gLabels,
          datasets: [
            {
              label: 'Single',
              data: singleValues,
              backgroundColor: 'rgba(0, 255, 0, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Married',
              data: marriedValues,
              backgroundColor: 'rgba(10, 10, 255, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Widowed',
              data: widowedValues,
              backgroundColor: 'rgba(80, 0, 0, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#000',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Separated',
              data: separatedValues,
              backgroundColor: 'rgba(255, 20, 20, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Divorced',
              data: divorcedValues,
              backgroundColor: 'rgba(216,250,8, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
          ],
        };
    } else if(reportPage == "Gender") {
        let maleValues = maleData.split(",");
        let femaleValues = femaleData.split(",");
        let gValues = [...maleValues, ...femaleValues];
        maxVal = Math.max(...gValues);
        data = {
          labels: gLabels,
          datasets: [
            {
              label: 'Male',
              data: maleValues,
              backgroundColor: 'rgba(0, 0, 255, 0.8)',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Female',
              data: femaleValues,
              backgroundColor: '#FF00FF',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
          ],
        };
    } else if(reportPage == "Religion") {
        let catholicValues = catholicData.split(",");
        let iglesiaValues = iglesiaData.split(",");
        let baptistValues = baptistData.split(",");
        let adventistValues = adventistData.split(",");
        let jilValues = jilData.split(",");
        let victoryValues = victoryData.split(",");
        let cocValues = cocData.split(",");
        let islamValues = islamData.split(",");
        let buddhistValues = buddhistData.split(",");
        let methodistValues = methodistData.split(",");
        let othersValues = othersData.split(",");

        let gValues = [...catholicValues, ...iglesiaValues, ...baptistValues, ...adventistValues, ...jilValues, ...victoryValues, ...cocValues, ...islamValues, ...buddhistValues, ...methodistValues, ...othersValues];
        maxVal = Math.max(...gValues);
        data = {
          labels: gLabels,
          datasets: [
            {
              label: 'Roman Catholic',
              data: catholicValues,
              backgroundColor: 'rgba(255, 20, 20, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              //barPercentage: 0.5,
              //barThickness: 6,
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Iglesia ni Cristo',
              data: iglesiaValues,
              backgroundColor: 'rgba(10, 10, 255, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Baptist Church',
              data: baptistValues,
              backgroundColor: 'rgba(0, 255, 0, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#000',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Adventist',
              data: adventistValues,
              backgroundColor: 'rgba(80, 0, 0, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: "Jesus is Lord",
              data: jilValues,
              backgroundColor: '#FF00FF',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Victory',
              data: victoryValues,
              backgroundColor: 'rgba(216,250,8, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },

            {
              label: 'Church of Christ',
              data: cocValues,
              backgroundColor: '#800080',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#000',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Islam',
              data: islamValues,
              backgroundColor: '#009000',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: "Buddhist",
              data: buddhistValues,
              backgroundColor: '#FF9800',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Methodist',
              data: methodistValues,
              backgroundColor: '#024D36',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Others',
              data: othersValues,
              backgroundColor: '#33FFE9',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
          ],
        };
    } else if(reportPage == "Classification") {
        let indigentValues = indigentData.split(",");
        let pensionerValues = pensionerData.split(",");
        let supportedValues = supportedData.split(",");
        let pwdValues = pwdData.split(",");
        let gValues = [...indigentValues, ...pensionerValues, ...supportedValues, ...pwdValues];
        maxVal = Math.max(...gValues);
        data = {
          labels: gLabels,
          datasets: [
            {
              label: 'Indigent',
              data: indigentValues,
              backgroundColor: 'rgba(0, 255, 0, 0.8)',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Pensioner',
              data: pensionerValues,
              backgroundColor: 'rgb(255, 0, 0, 0.8)',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Supported',
              data: supportedValues,
              backgroundColor: 'rgb(0, 0, 255, 0.8)',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'PWD',
              data: pwdValues,
              backgroundColor: 'rgb(10, 125, 255, 0.8)',
              hoverBackgroundColor: 'rgb(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
          ],
        };
    } else if(reportPage == "Common Illness") {
        let alzheimerValues = alzheimerData.split(",");
        let arthritisValues = arthritisData.split(",");
        let cancerValues = cancerData.split(",");
        let kidneyValues = kidneyData.split(",");
        let pulmonaryValues = pulmonaryData.split(",");
        let diabetesValues = diabetesData.split(",");
        let heartValues = heartData.split(",");
        let cholesterolValues = cholesterolData.split(",");
        let pneumoniaValues = pneumoniaData.split(",");
        let osteoporosisValues = osteoporosisData.split(",");
        let otherIllnessValues = otherIllnessData.split(",");

        let gValues = [...alzheimerValues, ...arthritisValues, ...cancerValues, ...kidneyValues, ...pulmonaryValues, ...diabetesValues, ...heartValues, ...cholesterolValues, ...pneumoniaValues, ...osteoporosisValues, ...otherIllnessValues];
        maxVal = Math.max(...gValues);
        data = {
          labels: gLabels,
          datasets: [
            {
              label: "Alzheimer's Disease",
              data: alzheimerValues,
              backgroundColor: 'rgba(255, 210, 100, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Arthritis',
              data: arthritisValues,
              backgroundColor: 'rgba(10, 10, 255, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Cancer',
              data: cancerValues,
              backgroundColor: 'rgba(80, 0, 0, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#000',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Chronic Kidney Disease',
              data: kidneyValues,
              backgroundColor: 'rgba(0, 255, 0, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: "COPD",
              data: pulmonaryValues,
              backgroundColor: '#FF00FF',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Diabetes',
              data: diabetesValues,
              backgroundColor: 'rgba(216,250,8, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },

            {
              label: 'Heart Disease',
              data: heartValues,
              backgroundColor: 'rgba(255, 10, 10, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#000',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'High Cholesterol',
              data: cholesterolValues,
              backgroundColor: 'rgba(10, 255, 200, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: "Influenza and Pneumonia",
              data: pneumoniaValues,
              backgroundColor: 'rgba(255,10,100, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Osteoporosis',
              data: osteoporosisValues,
              backgroundColor: 'rgba(216,250,254, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
            {
              label: 'Others',
              data: otherIllnessValues,
              backgroundColor: 'rgba(100,100,100, 0.8)',
              hoverBackgroundColor: 'rgba(255,255,0, 0.8)',
              borderColor: '#7d4304',
              fill: true,
              borderWidth: 1
            },
          ],
        };
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

export default ReportChart;
