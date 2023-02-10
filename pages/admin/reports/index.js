import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import { message, Form, Space, Select, Button, Input, DatePicker } from 'antd';
import { SearchOutlined, ExportOutlined, PrinterOutlined, ReloadOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import dayjs from 'dayjs';
import AdminLayout from '../../../components/layouts/AdminLayout';
import ModalLoading from '../../../components/ModalLoading';
import ReportTable from '../../../components/admin/ReportTable';
import ReportForm from '../../../components/forms/ReportForm';
import ReportChart from '../../../components/admin/ReportChart';
import { getMembers } from '../../../services/memberService';
import { formatDate } from '../../../services/helperService';
import { getBarangays } from '../../../services/dataService';
import { getMemberStatuses, generateMemberReport } from '../../../services/reportService';

const disabledDate = (current) => {
  return current > dayjs().endOf('day');
};

export default function Report()
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
    const [page, setPage] = useState('members');
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
    const [passedAway, setPassedAway] = useState([]);
    const [highRisk, setHighRisk] = useState([]);
    const [atRisk, setAtRisk] = useState([]);
    const [inactive, setInactive] = useState([]);
    const [active, setActive] = useState([]);
    const [reportGraphLabels, setReportGraphLabels] = useState([]);
    const [activeData, setActiveData] = useState([]);
    const [inactiveData, setInactiveData] = useState([]);
    const [highRiskData, setHighRiskData] = useState([]);
    const [atRiskData, setAtRiskData] = useState([]);
    const [passedAwayData, setPassedAwayData] = useState([]);
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
        const { data } = await generateMemberReport(typeValue, dateFrom, dateTo, municipality, 'members');
        setClasstype(data.classtype);
        setListOfGeneralStatus(data.listOfGeneralStatus);
        setPassedAway(data.passed_away)
        setHighRisk(data.high_risk);
        setAtRisk(data.at_risk);
        setInactive(data.inactive);
        setActive(data.active);
        setReportGraphLabels(data.labels);
        setActiveData(data.activeData);
        setInactiveData(data.inactiveData);
        setHighRiskData(data.highRiskData);
        setAtRiskData(data.atRiskData);
        setPassedAwayData(data.passedAwayData);
        setViewTable(true);
        setLoading(false);
    }

    const getSeniorStatuses = async () =>
    {
        const { data } = await getMemberStatuses();
        setMemberStatus(data.member_statuses);
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
        setBreadcrumb([roleLabel, "Dashboard", ">>", "Member Status Reports"]);
        getData('all', '', '', '');
        getSeniorStatuses();
    }, []);

    return (
        <AdminLayout
            role={role}
            isDashboard={isDashboard}
            isMember={isMember}
            isUser={isUser}
            isReport={isReport}
            title="Administration Panel - Member Status Reports"
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
                passedAway={passedAway}
                highRisk={highRisk}
                atRisk={atRisk}
                inactive={inactive}
                active={active}
                memberStatus={memberStatus}
                allBarangay={allBarangay}
                reportData={reportData}
                typeValue={typeValue}
                reportTitle={reportTitle}
                reportGraphLabels={reportGraphLabels}
                activeData={activeData}
                inactiveData={inactiveData}
                highRiskData={highRiskData}
                atRiskData={atRiskData}
                passedAwayData={passedAwayData}
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
                reportPage={'Member Status'}
                cspan={'7'}
            />
        </AdminLayout>
    );
}
