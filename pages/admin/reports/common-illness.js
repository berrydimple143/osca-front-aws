import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import { message, Form, Space, Select, Button, Input, DatePicker } from 'antd';
import { SearchOutlined, ExportOutlined, PrinterOutlined, ReloadOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import dayjs from 'dayjs';
import AdminLayout from '../../../components/layouts/AdminLayout';
import ModalLoading from '../../../components/ModalLoading';
import ReportForm from '../../../components/forms/ReportForm';
import ReportTable from '../../../components/admin/ReportTable';
import ReportChart from '../../../components/admin/ReportChart';
import { getMembers } from '../../../services/memberService';
import { formatDate } from '../../../services/helperService';
import { getBarangays } from '../../../services/dataService';
import { generateMemberReport } from '../../../services/reportService';

const disabledDate = (current) => {
  return current > dayjs().endOf('day');
};

export default function CommonIllness()
{
    const [role, setRole] = useState(Cookies.get('user_role'));
    const [breadcrumb, setBreadcrumb] = useState([]);
    const [municipalities, setMunicipalities] = useState([]);
    const [memberStatus, setMemberStatus] = useState([]);
    const [allBarangay, setAllBarangay] = useState([]);
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [disableMunicipality, setDisableMunicipality] = useState(true);
    const [typeValue, setTypeValue] = useState('Municipality');
    const [page, setPage] = useState('illness');
    const [municipality, setMunicipality] = useState('');
    const [municipalityName, setMunicipalityName] = useState('');
    const [dateFrom, setDateFrom] = useState('');
    const [dateFromString, setDateFromString] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [dateToString, setDateToString] = useState('');
    const [viewTable, setViewTable] = useState(false);
    const [listOfGeneralStatus, setListOfGeneralStatus] = useState([]);
    const [classtype, setClasstype] = useState('');
    const [graphTitle, setGraphTitle] = useState('');
    const [arthritis, setArthritis] = useState([]);
    const [alzheimer, setAlzheimer] = useState([]);
    const [cancer, setCancer] = useState([]);
    const [kidney, setKidney] = useState([]);
    const [pulmonary, setPulmonary] = useState([]);
    const [heart, setHeart] = useState([]);
    const [cholesterol, setCholesterol] = useState([]);
    const [pneumonia, setPneumonia] = useState([]);
    const [diabetes, setDiabetes] = useState([]);
    const [osteoporosis, setOsteoporosis] = useState([]);
    const [otherIllness, setOtherIllness] = useState([]);
    const [arthritisData, setArthritisData] = useState([]);
    const [alzheimerData, setAlzheimerData] = useState([]);
    const [cancerData, setCancerData] = useState([]);
    const [kidneyData, setKidneyData] = useState([]);
    const [pulmonaryData, setPulmonaryData] = useState([]);
    const [heartData, setHeartData] = useState([]);
    const [cholesterolData, setCholesterolData] = useState([]);
    const [pneumoniaData, setPneumoniaData] = useState([]);
    const [diabetesData, setDiabetesData] = useState([]);
    const [osteoporosisData, setOsteoporosisData] = useState([]);
    const [otherIllnessData, setOtherIllnessData] = useState([]);
    const [reportGraphLabels, setReportGraphLabels] = useState([]);
    const [reportTitle, setReportTitle] = useState('');
    const municipalityRef = useRef(null);
    const dateFromRef = useRef(null);
    const dateToRef = useRef(null);
    const router = useRouter();
    const [isDashboard, setIsDashboard] = useState(false);
    const [isMember, setIsMember] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isReport, setIsReport] = useState(true);

    const generateData = async () =>
    {
        setLoading(true);
        const { data } = await generateMemberReport(typeValue, dateFrom, dateTo, municipality, 'illness');
        setClasstype(data.classtype);
        setListOfGeneralStatus(data.listOfGeneralStatus);
        setReportGraphLabels(data.labels);
        setAlzheimer(data.alzheimer);
        setArthritis(data.arthritis);
        setCancer(data.cancer);
        setKidney(data.kidney);
        setPulmonary(data.pulmonary);
        setDiabetes(data.diabetes);
        setHeart(data.heart);
        setCholesterol(data.cholesterol);
        setPneumonia(data.pneumonia);
        setOsteoporosis(data.osteoporosis);
        setOtherIllness(data.otherIllness);
        setAlzheimerData(data.alzheimerData);
        setArthritisData(data.arthritisData);
        setCancerData(data.cancerData);
        setKidneyData(data.kidneyData);
        setPulmonaryData(data.pulmonaryData);
        setDiabetesData(data.diabetesData);
        setHeartData(data.heartData);
        setCholesterolData(data.cholesterolData);
        setPneumoniaData(data.pneumoniaData);
        setOsteoporosisData(data.osteoporosisData);
        setOtherIllnessData(data.otherIllnessData);
        setViewTable(true);
        setLoading(false);
    }

    const getData = async (mtype, mun, bar, stype) =>
    {
        setLoading(true);
        const { data } = await getMembers(mtype, mun, bar, stype);
        if(data.member_status == "success") {
            setMunicipalities(data.selectedMunicipalities);
        }
        setLoading(false);
    };

    const setBarangay = async (value, value2) =>
    {
        setMunicipalityName(value2.children);
        setMunicipality(value);
        setLoading(true);
        try
        {
            const { barangays } = await getBarangays(value);
            setAllBarangay(barangays);
            setLoading(false);
        } catch (error)
        {
            setLoading(false);
            message.error("Something went wrong.");
        }
    }

    const setDateInputFrom = (date, dateString) =>
    {
          if(date)
          {
            setDateFrom(formatDate(date, 'YYYY-MM-DD'));
            setDateFromString(formatDate(date, 'MMMM DD, YYYY'));
          } else
          {
            setDateFrom('');
            setDateFromString('');
          }
    }
    const setDateInputTo = (date, dateString) =>
    {
          if(date)
          {
            setDateTo(formatDate(date, 'YYYY-MM-DD'));
            setDateToString(formatDate(date, 'MMMM DD, YYYY'));
          } else
          {
            setDateTo('');
            setDateToString('');
          }
    }

    const setRightInput = (value) =>
    {
        setTypeValue(value);
        if(value == "Barangay") {
            setDisableMunicipality(false);
        } else {
            setDisableMunicipality(true);
        }
    }

    const reloadPage = () =>
    {
        router.reload(window.location.pathname);
    }

    useEffect(() => {
        const roleLabel = `Level: ${role} |`;
        setBreadcrumb([roleLabel, "Dashboard", ">>", "Common Illness Reports"]);
        getData('all', '', '', '');
    }, []);

    return (
        <AdminLayout
            role={role}
            isDashboard={isDashboard}
            isMember={isMember}
            isUser={isUser}
            isReport={isReport}
            title="Administration Panel - Common Illness Reports"
            trail={breadcrumb}>
            {(loading) && (
                <ModalLoading
                      message="Loading, please wait ..."
                      pcolor="bg-yellow-500"
                />
            )}

            <ReportForm
                disabledDate={disabledDate}
                ReportTable={ReportTable}
                ReportChart={ReportChart}
                disableMunicipality={disableMunicipality}
                setRightInput={setRightInput}
                setBarangay={setBarangay}
                municipalities={municipalities}
                municipalityRef={municipalityRef}
                setDateInputFrom={setDateInputFrom}
                dateFromRef={dateFromRef}
                setDateInputTo={setDateInputTo}
                dateToRef={dateToRef}
                reloadPage={reloadPage}
                listOfGeneralStatus={listOfGeneralStatus}
                viewTable={viewTable}
                classtype={classtype}
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
                memberStatus={memberStatus}
                allBarangay={allBarangay}
                reportData={reportData}
                typeValue={typeValue}
                reportTitle={reportTitle}
                reportGraphLabels={reportGraphLabels}
                graphTitle={graphTitle}
                dateFromString={dateFromString}
                dateToString={dateToString}
                municipalityName={municipalityName}
                municipality={municipality}
                generateData={generateData}
                dateFrom={dateFrom}
                dateTo={dateTo}
                setGraphTitle={setGraphTitle}
                setReportTitle={setReportTitle}
                page={page}
                reportPage={'Common Illness'}
                cspan={'13'}
            />
        </AdminLayout>
    );
}
