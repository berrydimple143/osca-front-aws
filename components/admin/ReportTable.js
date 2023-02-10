import React, { useState } from 'react';
import { Space } from 'antd';

const ReportTable = ({
  municipalities,
  memberStatus,
  allBarangay,
  reportData,
  reloadPage,
  title,
  typeValue,
  reportPage,
  classtype,
  listOfGeneralStatus,
  passedAway,
  highRisk,
  atRisk,
  inactive,
  active,
  reportTitle,
  employed,
  unemployed,
  selfEmployed,
  elementary,
  highSchool,
  college,
  vocational,
  masterDegree,
  doctoral,
  single,
  married,
  divorced,
  separated,
  widowed,
  male,
  female,
  catholic,
  iglesia,
  baptist,
  adventist,
  jil,
  victory,
  coc,
  islam,
  buddhist,
  methodist,
  others,
  indigent,
  pensioner,
  supported,
  pwd,
  alzheimer,
  arthritis,
  cancer,
  kidney,
  pulmonary,
  diabetes,
  heart,
  cholesterol,
  pneumonia,
  osteoporosis,
  otherIllness,
  cspan
}) => {
  let allAlzheimer = 0;
  let allArthritis = 0;
  let allCancer = 0;
  let allKidney = 0;
  let allPulmonary = 0;
  let allDiabetes = 0;
  let allHeart = 0;
  let allCholesterol = 0;
  let allPneumonia = 0;
  let allOsteoporosis = 0;
  let allOtherIllness = 0;
  let allIndigent = 0;
  let allPensioner = 0;
  let allSupported = 0;
  let allPwd = 0;
  let allCatholic = 0;
  let allIglesia = 0;
  let allBaptist = 0;
  let allAdventist = 0;
  let allJil = 0;
  let allVictory = 0;
  let allCoc = 0;
  let allIslam = 0;
  let allBuddhist = 0;
  let allMethodist = 0;
  let allOthers = 0;
  let total = 0;
  let allMale = 0;
  let allFemale = 0;
  let allPassedAway = 0;
  let allActive = 0;
  let allInactive = 0;
  let allAtRisk = 0;
  let allHighRisk = 0;
  let allEmployed = 0;
  let allUnemployed = 0;
  let allSelfEmployed = 0;
  let allElementary = 0;
  let allHighSchool = 0;
  let allCollege = 0;
  let allVocational = 0;
  let allMasters = 0;
  let allDoctoral = 0;
  let allSingle = 0;
  let allMarried = 0;
  let allWidowed = 0;
  let allSeparated = 0;
  let allDivorced = 0;
  let cName = '';
  let sum = [];

  return (
      <div className="flex flex-col">
        <div className="pt-0 w-near-full">
          <div className="flex flex-col">
            <div className="overflow-x-hidden sm:-mx-2 lg:-mx-4">
              <div className="py-2 inline-block min-w-full sm:px-2 lg:px-4">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border">
                      <tr>
                        <th colspan={`${cspan}`} className="border text-sm text-center font-large px-1 py-1 text-left">
                          {`${reportTitle}`}
                        </th>
                      </tr>
                      <tr>
                        <th className="border text-sm font-small text-gray-900 px-1 py-1 text-left">
                          {`${typeValue}`}
                        </th>
                        { reportPage == 'Member Status' && (
                          <>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Active</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Inactive</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">At Risk</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">High Risk</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Passed Away</th>
                          </>
                        )}
                        { reportPage == 'Employment Status' && (
                          <>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Employed</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Unemployed</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Self-Employed</th>
                          </>
                        )}
                        { reportPage == 'Educational Attainment' && (
                          <>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Elementary</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">High School</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">College</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Vocational</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Master's Degree</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Doctoral</th>
                          </>
                        )}
                        { reportPage == 'Civil Status' && (
                          <>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Single</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Married</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Widowed</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Separated</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Divorced</th>
                          </>
                        )}
                        { reportPage == 'Gender' && (
                          <>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Male</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Female</th>
                          </>
                        )}
                        { reportPage == 'Religion' && (
                          <>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Roman Catholic</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Iglesia ni Cristo</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Baptist Church</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Adventist</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Jesus is Lord</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Victory</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Church of Christ</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Islam</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Buddhist</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Methodist</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Others</th>
                          </>
                        )}
                        { reportPage == 'Classification' && (
                          <>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Indigent</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Pensioner</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Supported</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">PWD</th>
                          </>
                        )}
                        { reportPage == 'Common Illness' && (
                          <>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Alzheimer's Disease</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Arthritis</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Cancer</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Chronic Kidney Disease</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">COPD</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Diabetes</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Heart Disease</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">High Cholesterol</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Influenza and Pneumonia</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Osteoporosis</th>
                            <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">Others</th>
                          </>
                        )}
                        <th className="border text-sm text-center font-small text-gray-900 px-1 py-1 text-left">
                           Total No. of Senior Citizens
                        </th>
                      </tr>
                    </thead>
                    <tbody>

                    { listOfGeneralStatus && listOfGeneralStatus.map((item, index) => {
                          if(reportPage == 'Member Status') {
                            total = passedAway[index] + highRisk[index] + atRisk[index] + inactive[index] + active[index];
                            allPassedAway += passedAway[index];
                            allActive += active[index];
                            allInactive += inactive[index];
                            allAtRisk += atRisk[index];
                            allHighRisk += highRisk[index];
                          } else if(reportPage == 'Employment Status') {
                            total = employed[index] + unemployed[index] + selfEmployed[index];
                            allEmployed += employed[index];
                            allUnemployed += unemployed[index];
                            allSelfEmployed += selfEmployed[index];
                          } else if(reportPage == 'Educational Attainment') {
                            total = elementary[index] + highSchool[index] + college[index] + vocational[index] + masterDegree[index] + doctoral[index];
                            allElementary += elementary[index];
                            allHighSchool += highSchool[index];
                            allCollege += college[index];
                            allVocational += vocational[index];
                            allMasters += masterDegree[index];
                            allDoctoral += doctoral[index];
                          } else if(reportPage == 'Civil Status') {
                            total = single[index] + married[index] + divorced[index] + separated[index] + widowed[index];
                            allSingle += single[index];
                            allMarried += married[index];
                            allWidowed += widowed[index];
                            allSeparated += separated[index];
                            allDivorced += divorced[index];
                          } else if(reportPage == 'Gender') {
                            total = male[index] + female[index];
                            allMale += male[index];
                            allFemale += female[index];
                          } else if(reportPage == 'Religion') {
                            total = catholic[index] + iglesia[index] + baptist[index] + adventist[index] + jil[index] + victory[index] + coc[index] + islam[index] + buddhist[index] + methodist[index] + others[index];
                            allCatholic += catholic[index];
                            allIglesia += iglesia[index];
                            allBaptist += baptist[index];
                            allAdventist += adventist[index];
                            allJil += jil[index];
                            allVictory += victory[index];
                            allCoc += coc[index];
                            allIslam += islam[index];
                            allBuddhist += buddhist[index];
                            allMethodist += methodist[index];
                            allOthers += others[index];
                          } else if(reportPage == 'Classification') {
                            total = indigent[index] + pensioner[index] + supported[index] + pwd[index];
                            allIndigent += indigent[index];
                            allPensioner += pensioner[index];
                            allSupported += supported[index];
                            allPwd += pwd[index];
                          } else if(reportPage == 'Common Illness') {
                            total = alzheimer[index] + arthritis[index] + cancer[index] + kidney[index] + pulmonary[index] + diabetes[index] + heart[index] + cholesterol[index] + pneumonia[index] + osteoporosis[index] + otherIllness[index];
                            allAlzheimer += alzheimer[index];
                            allArthritis += arthritis[index];
                            allCancer += cancer[index];
                            allKidney += kidney[index];
                            allPulmonary += pulmonary[index];
                            allDiabetes += diabetes[index];
                            allHeart += heart[index];
                            allCholesterol += cholesterol[index];
                            allPneumonia += pneumonia[index];
                            allOsteoporosis += osteoporosis[index];
                            allOtherIllness += otherIllness[index];
                          }
                          sum.push(total);
                          if(typeValue == 'Municipality') {
                            cName = item.municipality_name;
                          } else {
                            cName = item.barangay_name;
                          }
                          if(reportPage == 'Member Status') {
                            return (<tr className="border" key={index}>
                                <td className="border px-1 py-1 whitespace-nowrap text-xs font-bold text-black">{ cName }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ active[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ inactive[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ atRisk[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ highRisk[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ passedAway[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ total }</td>
                             </tr>);
                          } else if(reportPage == 'Employment Status') {
                            return (<tr className="border" key={index}>
                                <td className="border px-1 py-1 whitespace-nowrap text-xs font-bold text-black">{ cName }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ employed[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ unemployed[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ selfEmployed[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ total }</td>
                             </tr>);
                          } else if(reportPage == 'Educational Attainment') {
                            return (<tr className="border" key={index}>
                                <td className="border px-1 py-1 whitespace-nowrap text-xs font-bold text-black">{ cName }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ elementary[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ highSchool[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ college[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ vocational[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ masterDegree[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ doctoral[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ total }</td>
                             </tr>);
                          } else if(reportPage == 'Civil Status') {
                            return (<tr className="border" key={index}>
                                <td className="border px-1 py-1 whitespace-nowrap text-xs font-bold text-black">{ cName }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ single[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ married[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ widowed[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ separated[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ divorced[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ total }</td>
                             </tr>);
                          } else if(reportPage == 'Gender') {
                            return (<tr className="border" key={index}>
                                <td className="border px-1 py-1 whitespace-nowrap text-xs font-bold text-black">{ cName }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ male[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ female[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ total }</td>
                             </tr>);
                          } else if(reportPage == 'Religion') {
                            return (<tr className="border" key={index}>
                                <td className="border px-1 py-1 whitespace-nowrap text-xs font-bold text-black">{ cName }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ catholic[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ iglesia[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ baptist[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ adventist[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ jil[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ victory[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ coc[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ islam[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ buddhist[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ methodist[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ others[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ total }</td>
                             </tr>);
                          } else if(reportPage == 'Classification') {
                             return (<tr className="border" key={index}>
                                <td className="border px-1 py-1 whitespace-nowrap text-xs font-bold text-black">{ cName }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ indigent[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ pensioner[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ supported[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ pwd[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ total }</td>
                             </tr>);
                          } else if(reportPage == 'Common Illness') {
                              return (<tr className="border" key={index}>
                                <td className="border px-1 py-1 whitespace-nowrap text-xs font-bold text-black">{ cName }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ alzheimer[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ arthritis[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ cancer[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ kidney[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ pulmonary[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ diabetes[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ heart[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ cholesterol[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ pneumonia[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ osteoporosis[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ otherIllness[index] }</td>
                                <td className="border px-1 py-1 whitespace-nowrap text-center text-xs font-bold text-black">{ total }</td>
                             </tr>);
                          }
                        }
                      )}

                      <tr className="border">
                        <td className="border px-1 py-1 whitespace-nowrap text-xl font-bold text-black">
                          Total
                        </td>
                        { reportPage == 'Member Status' && (
                          <>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allActive }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allInactive }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allAtRisk }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allHighRisk }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allPassedAway }
                            </td>
                          </>
                        )}
                        { reportPage == 'Employment Status' && (
                          <>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allEmployed }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allUnemployed }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allSelfEmployed }
                            </td>
                          </>
                        )}
                        { reportPage == 'Educational Attainment' && (
                          <>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allElementary }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allHighSchool }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allCollege }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allVocational }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allMasters }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allDoctoral }
                            </td>
                          </>
                        )}
                        { reportPage == 'Civil Status' && (
                          <>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allSingle }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allMarried }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allWidowed }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allSeparated }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allDivorced }
                            </td>
                          </>
                        )}
                        { reportPage == 'Gender' && (
                          <>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allMale }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allFemale }
                            </td>
                          </>
                        )}
                        { reportPage == 'Religion' && (
                          <>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allCatholic }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allIglesia }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allBaptist }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allAdventist }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allJil }
                            </td>

                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allVictory }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allCoc }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allIslam }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allBuddhist }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allMethodist }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allOthers }
                            </td>
                          </>
                        )}
                        { reportPage == 'Classification' && (
                          <>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allIndigent }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allPensioner }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allSupported }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allPwd }
                            </td>
                          </>
                        )}
                        { reportPage == 'Common Illness' && (
                          <>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allAlzheimer }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allArthritis }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allCancer }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allKidney }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allPulmonary }
                            </td>

                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allDiabetes }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allHeart }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allCholesterol }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allPneumonia }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allOsteoporosis }
                            </td>
                            <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                              { allOtherIllness }
                            </td>
                          </>
                        )}
                        <td className="border px-1 py-1 whitespace-nowrap text-center text-xl font-bold text-black">
                          {sum.reduce((a, b) => a + b, 0)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  );
};
export default ReportTable;
