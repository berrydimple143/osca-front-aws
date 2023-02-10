import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import AdminLayout from '../../components/layouts/AdminLayout';
import BarChart from '../../components/admin/BarChart';
import StatisticsCard from '../../components/admin/StatisticsCard';
import { getMunicipalitiesMembers } from '../../services/analyticsService';
import ModalLoading from '../../components/ModalLoading';

export default function Dashboard()
{
    const [graphLabels, setGraphLabels] = useState('');
    const [graphValues, setGraphValues] = useState('');
    const [todayMembers, setTodayMembers] = useState(0);
    const [totalMembers, setTotalMembers] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isDashboard, setIsDashboard] = useState(true);
    const [isMember, setIsMember] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isReport, setIsReport] = useState(false);
    const [role, setRole] = useState(Cookies.get('user_role'));
    const [user, setUser] = useState(Cookies.get('user'));
    const [breadcrumb, setBreadcrumb] = useState([]);

    const getAnalytics = async () =>
    {
        setLoading(true);
        const { data } = await getMunicipalitiesMembers();
        if(data) {
            setGraphLabels(data.labels);
            setGraphValues(data.info);
            setTodayMembers(data.today);
            setTotalMembers(data.total);
            setLoading(false);
        }
    }
    useEffect(() => {
        const roleLabel = `Level: ${role} |`;
        setBreadcrumb([roleLabel, "Dashboard"]);
        getAnalytics();
    }, []);
    return (
        <AdminLayout
            role={role}
            isDashboard={isDashboard}
            isMember={isMember}
            isUser={isUser}
            isReport={isReport}
            title="Administration Panel"
            trail={breadcrumb}>
            {(loading) && (
                <ModalLoading
                      message="Loading, please wait ..."
                      pcolor="bg-yellow-500"
                />
            )}
            <div className="p-2 flex justify-between items-center">
                <StatisticsCard title="Today’s Senior Citizen" count={todayMembers} bgColor='bg-secondary' />
                <StatisticsCard title="Total Senior Citizen" count={totalMembers} bgColor='bg-primary' />
            </div>
            <div className="p-2 border">
                <BarChart
                    setLoading={setLoading}
                    legendLabel="Total Senior Citizen"
                    graphLabels={graphLabels}
                    graphValues={graphValues}
                    graphTitle="Total number of senior citizen members per municipality"
                    graphWidth={'950'}
                    graphHeight={'350'}
                 />
            </div>
        </AdminLayout>
    );
}
