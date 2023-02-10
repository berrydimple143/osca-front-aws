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

export default function CivilStatus()
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
    const [page, setPage] = useState('civil_status');
    const [isDashboard, setIsDashboard] = useState(false);
    const [isMember, setIsMember] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isReport, setIsReport] = useState(true);
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
    const [single, setSingle] = useState([]);
    const [married, setMarried] = useState([]);
    const [widowed, setWidowed] = useState([]);
    const [divorced, setDivorced] = useState([]);
    const [separated, setSeparated] = useState([]);
    const [singleData, setSingleData] = useState([]);
    const [marriedData, setMarriedData] = useState([]);
    const [widowedData, setWidowedData] = useState([]);
    const [divorcedData, setDivorcedData] = useState([]);
    const [separatedData, setSeparatedData] = useState([]);
    const [reportGraphLabels, setReportGraphLabels] = useState([]);
    const [reportTitle, setReportTitle] = useState('');
    const municipalityRef = useRef(null);
    const dateFromRef = useRef(null);
    const dateToRef = useRef(null);
    const router = useRouter();

    const generateData = async () =>
    {
        setLoading(true);
        const { data } = await generateMemberReport(typeValue, dateFrom, dateTo, municipality, 'civil_status');
        setClasstype(data.classtype);
        setListOfGeneralStatus(data.listOfGeneralStatus);
        setReportGraphLabels(data.labels);
        setSingle(data.single)
        setMarried(data.married);
        setWidowed(data.widowed);
        setDivorced(data.divorced);
        setSeparated(data.separated);
        setSingleData(data.singleData);
        setMarriedData(data.marriedData);
        setWidowedData(data.widowedData);
        setDivorcedData(data.divorcedData);
        setSeparatedData(data.separatedData);
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
        setDateFrom(formatDate(date, 'YYYY-MM-DD'));
        setDateFromString(formatDate(date, 'MMMM DD, YYYY'));
    }

    const setDateInputTo = (date, dateString) =>
    {
        setDateTo(formatDate(date, 'YYYY-MM-DD'));
        setDateToString(formatDate(date, 'MMMM DD, YYYY'));
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
        setBreadcrumb([roleLabel, "Dashboard", ">>", "Civil Status Reports"]);
        getData('all', '', '', '');
    }, []);

    return (
        <AdminLayout
            role={role}
            isDashboard={isDashboard}
            isMember={isMember}
            isUser={isUser}
            isReport={isReport}
            title="Administration Panel - Civil Status Reports"
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
                single={single}
                married={married}
                divorced={divorced}
                separated={separated}
                widowed={widowed}
                singleData={singleData}
                marriedData={marriedData}
                divorcedData={divorcedData}
                separatedData={separatedData}
                widowedData={widowedData}
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
                reportPage={'Civil Status'}
                cspan={'7'}
            />
        </AdminLayout>
    );
}
