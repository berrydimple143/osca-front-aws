import React, { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';
import { Space, Select, Button, Input, DatePicker, message } from 'antd';
import { SearchOutlined, ExportOutlined, PrinterOutlined, ReloadOutlined } from '@ant-design/icons';
import PrintTable from '../printable/PrintTable';
import PrintChart from '../printable/PrintChart';
import { exportReport } from '../../services/reportService';
const baseURL = `${process.env.NEXT_PUBLIC_API}`;

const ReportForm = ({
    disabledDate,
    ReportTable,
    ReportChart,
    disableMunicipality,
    setRightInput,
    setBarangay,
    municipalities,
    municipalityRef,
    setDateInputFrom,
    dateFromRef,
    setDateInputTo,
    dateToRef,
    reloadPage,
    listOfGeneralStatus,
    viewTable,
    classtype,
    passedAway,
    highRisk,
    atRisk,
    inactive,
    active,
    memberStatus,
    allBarangay,
    reportData,
    typeValue,
    reportTitle,
    reportPage,
    reportGraphLabels,
    activeData,
    inactiveData,
    highRiskData,
    atRiskData,
    passedAwayData,
    graphTitle,
    employed,
    unemployed,
    selfEmployed,
    employedData,
    unemployedData,
    selfEmployedData,
    elementary,
    highSchool,
    college,
    vocational,
    masterDegree,
    doctoral,
    elementaryData,
    highSchoolData,
    collegeData,
    vocationalData,
    masterDegreeData,
    doctoralData,
    single,
    married,
    divorced,
    separated,
    widowed,
    singleData,
    marriedData,
    divorcedData,
    separatedData,
    widowedData,
    male,
    female,
    maleData,
    femaleData,
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
    indigent,
    pensioner,
    supported,
    pwd,
    indigentData,
    pensionerData,
    supportedData,
    pwdData,
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
    cspan,
    dateFromString,
    dateToString,
    municipalityName,
    municipality,
    generateData,
    dateFrom,
    dateTo,
    setGraphTitle,
    setReportTitle,
    page
}) =>
{
    const [canPrint, setCanPrint] = useState(false);
    const [canExport, setCanExport] = useState(false);
    const printTableRef = useRef();
    const printChartRef = useRef();

    const handlePrinting = () =>
    {
        if(canPrint) {
            handlePrintTable();
        } else {
            message.error('Please view reports first before you can print.');
        }
    }

    const handleExport = async () =>
    {
        if(canExport) {
            const params = {
                listOfGeneralStatus,
                passedAway,
                highRisk,
                atRisk,
                inactive,
                active,
                single,
                married,
                widowed,
                divorced,
                separated,
                employed,
                unemployed,
                selfEmployed,
                elementary,
                highSchool,
                college,
                vocational,
                masterDegree,
                doctoral,
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
                page,
                ctype: typeValue
            }
            const { data } = await exportReport(params);
            window.open(`${baseURL}/downloadReport/${data}`, '_blank');
        } else {
            message.error('Please view reports first before you can export.');
        }
    }

    const handlePrintTable = useReactToPrint({
        content: () => printTableRef.current,
        onAfterPrint: () => {
            handlePrintChart();
        },
    });

    const handlePrintChart = useReactToPrint({
        content: () => printChartRef.current,
        onAfterPrint: () => {
            reloadPage();
        },
    });

    const viewData = () =>
    {
        if(typeValue == 'Barangay')
        {
            setGraphTitle(`Total number of senior citizen members of ${municipalityName} from ${dateFromString} to ${dateToString}`);
            if(municipality == '')
            {
                message.error('Please select a municipality.');
                municipalityRef.current.focus();
            } else
            {
                if(dateFrom == '' && dateTo == '')
                {
                    message.error('Please provide a starting and an ending date.');
                    dateFromRef.current.focus();
                } else if(dateFrom == '')
                {
                    message.error('Please provide a starting date.');
                    dateFromRef.current.focus();
                } else if(dateTo == '')
                {
                    message.error('Please provide an ending date.');
                    dateToRef.current.focus();
                } else if(dateTo < dateFrom)
                {
                  message.error('Date to should be after or the same as date from.');
                  dateToRef.current.focus();
                } else
                {
                    setReportTitle(`Municipality of ${municipalityName} - ${reportPage} per Barangay from ${dateFromString} to ${dateToString}`);
                    generateData();
                    setCanPrint(true);
                    setCanExport(true);
                }
            }
        } else
        {
            setGraphTitle(`Total number of senior citizen members per municipality from ${dateFromString} to ${dateToString}`);
            if(dateFrom == '' && dateTo == '')
            {
                message.error('Please provide a starting and an ending date.');
                dateFromRef.current.focus();
            } else if(dateFrom == '')
            {
                message.error('Please provide a starting date.');
                dateFromRef.current.focus();
            } else if(dateTo == '')
            {
                message.error('Please provide an ending date.');
                dateToRef.current.focus();
            } else if(dateTo < dateFrom)
            {
              message.error('Date to should be after or the same as date from.');
              dateToRef.current.focus();
            } else
            {
                setReportTitle(`${reportPage} per Municipality from ${dateFromString} to ${dateToString}`);
                generateData();
                setCanPrint(true);
                setCanExport(true);
            }
        }
    }

    return (
        <div className="flex flex-col">
            <div className="border p-5 mr-4">
                <Space size="middle">
                  <h1 className="text-xl">Data and Analytics - {reportPage}</h1>
                </Space>
                <div className="pt-0">
                    <Space>
                      <Input.Group compact>
                          <Input style={{ width: '100px' }} disabled={true} placeholder="Type:" />
                          <Select
                            onChange={setRightInput}
                            placeholder="Select type here ..."
                            defaultValue='Municipality'
                            style={{
                              width: '213px',
                            }}
                          >
                            <Select.Option value="Municipality">All Municipality</Select.Option>
                            <Select.Option value="Barangay">Per Barangay</Select.Option>
                          </Select>
                      </Input.Group>
                      { !disableMunicipality && (
                          <Select
                            onChange={setBarangay}
                            placeholder="Select municipality here ..."
                            ref={municipalityRef}
                            style={{ width: '250px' }}
                            size="medium"
                            >
                            {" "}
                            {municipalities && municipalities.map((item, index) => <Select.Option value={item.municipality_code_number} key={index}>{item.municipality_name}</Select.Option>)}
                          </Select>
                      )}
                    </Space>
                    </div>
                    <div className="pt-0">
                        <Space>
                            <Input.Group compact>
                              <Input style={{ width: '100px' }} disabled={true} placeholder="Date From:" />
                              <DatePicker
                                onChange={setDateInputFrom}
                                format='MMMM DD, YYYY'
                                disabledDate={disabledDate}
                                ref={dateFromRef}
                                style={{ width: '212px' }}
                                size="medium"
                                placeholder="Pick a date here ..." />
                            </Input.Group>
                            <Input.Group compact>
                              <Input style={{ width: '80px' }} disabled={true} placeholder="Date To:" />
                              <DatePicker
                                onChange={setDateInputTo}
                                format='MMMM DD, YYYY'
                                disabledDate={disabledDate}
                                ref={dateToRef}
                                style={{ width: '172px' }}
                                size="medium"
                                placeholder="Pick a date here ..." />
                            </Input.Group>
                            <Button
                                icon={<ReloadOutlined />}
                                onClick={reloadPage}
                                className="rounded-none"
                                size='default'>
                                Refresh
                            </Button>
                            <Button
                                onClick={viewData}
                                icon={<SearchOutlined />}
                                className="rounded-none"
                                size='default'>
                                Preview
                            </Button>
                            <Button
                                icon={<PrinterOutlined />}
                                onClick={handlePrinting}
                                className="rounded-none"
                                size='default'>
                                Print
                            </Button>
                            <Button
                                icon={<ExportOutlined />}
                                onClick={handleExport}
                                className="rounded-none"
                                size='default'>
                                Export
                            </Button>
                        </Space>
                    </div>
                </div>
                { listOfGeneralStatus && viewTable && (
                    <>
                        <div className="pt-0">
                            <PrintTable
                                ref={printTableRef}
                                classtype={classtype}
                                listOfGeneralStatus={listOfGeneralStatus}
                                passedAway={passedAway}
                                highRisk={passedAway}
                                atRisk={atRisk}
                                inactive={inactive}
                                active={active}
                                employed={employed}
                                unemployed={unemployed}
                                selfEmployed={selfEmployed}
                                elementary={elementary}
                                highSchool={highSchool}
                                college={college}
                                vocational={vocational}
                                masterDegree={masterDegree}
                                doctoral={doctoral}
                                single={single}
                                married={married}
                                divorced={divorced}
                                separated={separated}
                                widowed={widowed}
                                male={male}
                                female={female}
                                catholic={catholic}
                                iglesia={iglesia}
                                baptist={baptist}
                                adventist={adventist}
                                jil={jil}
                                victory={victory}
                                coc={coc}
                                islam={islam}
                                buddhist={buddhist}
                                methodist={methodist}
                                others={others}
                                indigent={indigent}
                                pensioner={pensioner}
                                supported={supported}
                                pwd={pwd}
                                alzheimer={alzheimer}
                                arthritis={arthritis}
                                cancer={cancer}
                                kidney={kidney}
                                pulmonary={pulmonary}
                                diabetes={diabetes}
                                heart={heart}
                                cholesterol={cholesterol}
                                pneumonia={pneumonia}
                                osteoporosis={osteoporosis}
                                otherIllness={otherIllness}
                                municipalities={municipalities}
                                memberStatus={memberStatus}
                                allBarangay={allBarangay}
                                reportData={reportData}
                                reloadPage={reloadPage}
                                typeValue={typeValue}
                                reportTitle={reportTitle}
                                reportPage={reportPage}
                                cspan={cspan}
                            />
                        </div>
                        <div className="pt-2">
                            <PrintChart
                                ref={printChartRef}
                                reportPage={reportPage}
                                reportGraphLabels={reportGraphLabels}
                                activeData={activeData}
                                inactiveData={inactiveData}
                                highRiskData={highRiskData}
                                atRiskData={atRiskData}
                                passedAwayData={passedAwayData}
                                employedData={employedData}
                                unemployedData={unemployedData}
                                selfEmployedData={selfEmployedData}
                                elementaryData={elementaryData}
                                highSchoolData={highSchoolData}
                                collegeData={collegeData}
                                vocationalData={vocationalData}
                                masterDegreeData={masterDegreeData}
                                doctoralData={doctoralData}
                                singleData={singleData}
                                marriedData={marriedData}
                                divorcedData={divorcedData}
                                separatedData={separatedData}
                                widowedData={widowedData}
                                maleData={maleData}
                                femaleData={femaleData}
                                catholicData={catholicData}
                                iglesiaData={iglesiaData}
                                baptistData={baptistData}
                                adventistData={adventistData}
                                jilData={jilData}
                                victoryData={victoryData}
                                cocData={cocData}
                                islamData={islamData}
                                buddhistData={buddhistData}
                                methodistData={methodistData}
                                othersData={othersData}
                                indigentData={indigentData}
                                pensionerData={pensionerData}
                                supportedData={supportedData}
                                pwdData={pwdData}
                                alzheimerData={alzheimerData}
                                arthritisData={arthritisData}
                                cancerData={cancerData}
                                kidneyData={kidneyData}
                                pulmonaryData={pulmonaryData}
                                diabetesData={diabetesData}
                                heartData={heartData}
                                cholesterolData={cholesterolData}
                                pneumoniaData={pneumoniaData}
                                osteoporosisData={osteoporosisData}
                                otherIllnessData={otherIllnessData}
                                graphTitle={graphTitle}
                                graphWidth={'950'}
                                graphHeight={'470'}
                             />
                        </div>
                    </>
                )}
          </div>
    );
}

export default ReportForm;
