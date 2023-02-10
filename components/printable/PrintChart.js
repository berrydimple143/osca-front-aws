import React from "react";
import ReportChart from '../admin/ReportChart';

const PrintChart = React.forwardRef((props, printChartRef) => {
  return (
    <div ref={printChartRef}>
        <ReportChart
              reportPage={props.reportPage}
              reportGraphLabels={props.reportGraphLabels}
              activeData={props.activeData}
              inactiveData={props.inactiveData}
              highRiskData={props.highRiskData}
              atRiskData={props.atRiskData}
              passedAwayData={props.passedAwayData}
              employedData={props.employedData}
              unemployedData={props.unemployedData}
              selfEmployedData={props.selfEmployedData}
              elementaryData={props.elementaryData}
              highSchoolData={props.highSchoolData}
              collegeData={props.collegeData}
              vocationalData={props.vocationalData}
              masterDegreeData={props.masterDegreeData}
              doctoralData={props.doctoralData}
              singleData={props.singleData}
              marriedData={props.marriedData}
              divorcedData={props.divorcedData}
              separatedData={props.separatedData}
              widowedData={props.widowedData}
              maleData={props.maleData}
              femaleData={props.femaleData}
              catholicData={props.catholicData}
              iglesiaData={props.iglesiaData}
              baptistData={props.baptistData}
              adventistData={props.adventistData}
              jilData={props.jilData}
              victoryData={props.victoryData}
              cocData={props.cocData}
              islamData={props.islamData}
              buddhistData={props.buddhistData}
              methodistData={props.methodistData}
              othersData={props.othersData}
              indigentData={props.indigentData}
              pensionerData={props.pensionerData}
              supportedData={props.supportedData}
              pwdData={props.pwdData}
              alzheimerData={props.alzheimerData}
              arthritisData={props.arthritisData}
              cancerData={props.cancerData}
              kidneyData={props.kidneyData}
              pulmonaryData={props.pulmonaryData}
              diabetesData={props.diabetesData}
              heartData={props.heartData}
              cholesterolData={props.cholesterolData}
              pneumoniaData={props.pneumoniaData}
              osteoporosisData={props.osteoporosisData}
              otherIllnessData={props.otherIllnessData}
              graphTitle={props.graphTitle}
              graphWidth={props.graphWidth}
              graphHeight={props.graphHeight}
        />
    </div>
  );
});

PrintChart.displayName = "OSCA";

export default PrintChart;
