import React from "react";
import ReportTable from '../admin/ReportTable';

const PrintTable = React.forwardRef((props, printTableRef) => {
  return (
    <div ref={printTableRef}>
        <ReportTable
            classtype={props.classtype}
            listOfGeneralStatus={props.listOfGeneralStatus}
            passedAway={props.passedAway}
            highRisk={props.highRisk}
            atRisk={props.atRisk}
            inactive={props.inactive}
            active={props.active}
            employed={props.employed}
            unemployed={props.unemployed}
            selfEmployed={props.selfEmployed}
            elementary={props.elementary}
            highSchool={props.highSchool}
            college={props.college}
            vocational={props.vocational}
            masterDegree={props.masterDegree}
            doctoral={props.doctoral}
            single={props.single}
            married={props.married}
            divorced={props.divorced}
            separated={props.separated}
            widowed={props.widowed}
            male={props.male}
            female={props.female}
            catholic={props.catholic}
            iglesia={props.iglesia}
            baptist={props.baptist}
            adventist={props.adventist}
            jil={props.jil}
            victory={props.victory}
            coc={props.coc}
            islam={props.islam}
            buddhist={props.buddhist}
            methodist={props.methodist}
            others={props.others}
            indigent={props.indigent}
            pensioner={props.pensioner}
            supported={props.supported}
            pwd={props.pwd}
            alzheimer={props.alzheimer}
            arthritis={props.arthritis}
            cancer={props.cancer}
            kidney={props.kidney}
            pulmonary={props.pulmonary}
            diabetes={props.diabetes}
            heart={props.heart}
            cholesterol={props.cholesterol}
            pneumonia={props.pneumonia}
            osteoporosis={props.osteoporosis}
            otherIllness={props.otherIllness}
            municipalities={props.municipalities}
            memberStatus={props.memberStatus}
            allBarangay={props.allBarangay}
            reportData={props.reportData}
            reloadPage={props.reloadPage}
            typeValue={props.typeValue}
            reportTitle={props.reportTitle}
            reportPage={props.reportPage}
            cspan={props.cspan}
        />
    </div>
  );
});

PrintTable.displayName = "OSCA";

export default PrintTable;
