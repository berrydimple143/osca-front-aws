import { Space, Select, Button, Input, DatePicker, message } from 'antd';
import { DatabaseOutlined, ReloadOutlined, LoadingOutlined } from '@ant-design/icons';
import React, { useState, useEffect, useRef } from "react";
import moment from 'moment';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import Hero from '../components/front/Hero';
import StatusChart from '../components/front/charts/StatusChart';
import SiteLayout from '../components/layouts/SiteLayout';
import ModalLoading from '../components/ModalLoading';
import { formatDate } from '../services/helperService';
import { getDetails, getBarangayData } from '../services/dataService';

const disabledDate = (current) => {
  return current > dayjs().endOf('day');
};

export default function DataAnalytics()
{
  const [reportGraphLabels, setReportGraphLabels] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [inactiveData, setInactiveData] = useState([]);
  const [highRiskData, setHighRiskData] = useState([]);
  const [atRiskData, setAtRiskData] = useState([]);
  const [passedAwayData, setPassedAwayData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showChart, setShowChart] = useState(false);
  const [municipality, setMunicipality] = useState('all');
  const [municipalities, setMunicipalities] = useState([]);
  const [dateFrom, setDateFrom] = useState('');
  const [graphTitle, setGraphTitle] = useState('Total number of senior citizen members per municipality');
  const [dateFromString, setDateFromString] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [municipalityName, setMunicipalityName] = useState('');
  const [dateToString, setDateToString] = useState('');
  const dateFromRef = useRef(null);
  const dateToRef = useRef(null);
  const router = useRouter();

  const getMunicipality = (value, value2) =>
  {
    setMunicipality(value);
    setMunicipalityName(value2.children);
  }
  const reloadPage = () =>
  {
      router.reload(window.location.pathname);
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
  const getData = async () =>
  {
      setLoading(true);
      const { mun } = await getDetails();
      setMunicipalities(mun);
      setLoading(false);
  }
  const getMunicipalityData = async (mun, from, to) =>
  {
      setShowChart(false);
      const {
        info_status,
        labels,
        activeData,
        inactiveData,
        highRiskData,
        atRiskData,
        passedAwayData
      } = await getBarangayData({ mun, from, to });
      setTimeout(function()
      {
        setReportGraphLabels(labels);
        setActiveData(activeData);
        setInactiveData(inactiveData);
        setHighRiskData(highRiskData);
        setAtRiskData(atRiskData);
        setPassedAwayData(passedAwayData);
        setShowChart(true);
      }, 1000);
  }
  const viewData = () =>
  {
      if(municipality !== 'all')
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
            setGraphTitle(`Total number of senior citizen members of ${municipalityName} from ${dateFromString} to ${dateToString}`);
            getMunicipalityData(municipality, dateFrom, dateTo);
          }
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
              setGraphTitle(`Total number of senior citizen members per municipality from ${dateFromString} to ${dateToString}`);
              getMunicipalityData(municipality, dateFrom, dateTo);
          }
      }
  }
  useEffect(() =>
  {
    getData();
    getMunicipalityData('all', moment().subtract(2, 'months'), moment());
  }, []);
  return (
    <SiteLayout title="Office of the Senior Citizen's Affairs - Data & Analytics" setLoading={setLoading}>
        {(loading) && (
            <ModalLoading
                  message="Loading, please wait ..."
                  pcolor="bg-yellow-500"
            />
        )}
        <Hero
            page="data analytics"
            bgImage="h-screen bg-fixed bg-right bg-cover ra-img"
            heading1="DATA & ANALYTICS"
            textWidth="w-200"
        />
        <div className="flex flex-col justify-center items-center py-10">
            <div className="border p-5 mr-4">
                <div className="pt-0">
                    <Space>
                        <Select
                          onChange={getMunicipality}
                          placeholder="Select municipality here ..."
                          style={{ width: '250px' }}
                          defaultValue={'all'}
                          size="medium"
                          >
                          <Select.Option value="all">ALL</Select.Option>
                          {municipalities && municipalities.map((item, index) => <Select.Option value={item.municipality_code_number} key={index}>{item.municipality_name}</Select.Option>)}
                        </Select>
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
                            onClick={viewData}
                            icon={<DatabaseOutlined />}
                            className="rounded-none"
                            size='default'>
                            Generate Data
                        </Button>
                        <Button
                            icon={<ReloadOutlined />}
                            onClick={reloadPage}
                            className="rounded-none"
                            size='default'>
                        </Button>
                    </Space>
                </div>
                <div className="p-2">
                  { !showChart && (
                    <center><LoadingOutlined className='text-center' style={{ fontSize: '40pt' }} /></center>
                  )}
                  { showChart && (
                      <StatusChart
                        reportGraphLabels={reportGraphLabels}
                        activeData={activeData}
                        inactiveData={inactiveData}
                        highRiskData={highRiskData}
                        atRiskData={atRiskData}
                        passedAwayData={passedAwayData}
                        graphTitle={graphTitle}
                        graphWidth={'950'}
                        graphHeight={'370'}
                     />
                  )}
                </div>
            </div>
        </div>
    </SiteLayout>
  )
}
