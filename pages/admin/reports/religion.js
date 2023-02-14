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

export default function Religion()
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
    const [page, setPage] = useState('religions');
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
    const [catholic, setCatholic] = useState([]);
    const [iglesia, setIglesia] = useState([]);
    const [baptist, setBaptist] = useState([]);
    const [adventist, setAdventist] = useState([]);
    const [jil, setJil] = useState([]);
    const [coc, setCoc] = useState([]);
    const [victory, setVictory] = useState([]);
    const [buddhist, setBuddhist] = useState([]);
    const [methodist, setMethodist] = useState([]);
    const [islam, setIslam] = useState([]);
    const [others, setOthers] = useState([]);
    const [catholicData, setCatholicData] = useState([]);
    const [iglesiaData, setIglesiaData] = useState([]);
    const [baptistData, setBaptistData] = useState([]);
    const [adventistData, setAdventistData] = useState([]);
    const [jilData, setJilData] = useState([]);
    const [cocData, setCocData] = useState([]);
    const [victoryData, setVictoryData] = useState([]);
    const [buddhistData, setBuddhistData] = useState([]);
    const [methodistData, setMethodistData] = useState([]);
    const [islamData, setIslamData] = useState([]);
    const [othersData, setOthersData] = useState([]);
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
        const { data } = await generateMemberReport(typeValue, dateFrom, dateTo, municipality, 'religions');
        setClasstype(data.classtype);
        setListOfGeneralStatus(data.listOfGeneralStatus);
        setReportGraphLabels(data.labels);
        setCatholic(data.catholic)
        setIglesia(data.iglesia);
        setBaptist(data.baptist);
        setAdventist(data.adventist);
        setJil(data.jil)
        setVictory(data.victory);
        setCoc(data.coc);
        setIslam(data.islam);
        setBuddhist(data.buddhist)
        setMethodist(data.methodist);
        setOthers(data.others);
        setCatholicData(data.catholicData)
        setIglesiaData(data.iglesiaData);
        setBaptistData(data.baptistData);
        setAdventistData(data.adventistData);
        setJilData(data.jilData)
        setVictoryData(data.victoryData);
        setCocData(data.cocData);
        setIslamData(data.islamData);
        setBuddhistData(data.buddhistData)
        setMethodistData(data.methodistData);
        setOthersData(data.othersData);
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
        setBreadcrumb([roleLabel, "Dashboard", ">>", "Religion Reports"]);
        getData('all', '', '', '');
    }, []);

    return (
        <AdminLayout
            role={role}
            isDashboard={isDashboard}
            isMember={isMember}
            isUser={isUser}
            isReport={isReport}
            title="Administration Panel - Religion Reports"
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
                reportPage={'Religion'}
                cspan={'13'}
            />
        </AdminLayout>
    );
}
