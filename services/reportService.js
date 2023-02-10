import axios from "axios";
import Cookies from 'js-cookie';
const baseURL = `${process.env.NEXT_PUBLIC_API}/api`;
const token = Cookies.get('token');
const header = { headers: { 'Authorization': `Bearer ${token}`, }};

export const exportReport = async (params) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/exportReport`, params, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const generateMemberReport = async (ctype, from, to, municipality, page) =>
{
    try
    {
        const params = { ctype, from, to, municipality, page };
        const data = await axios.post(`${baseURL}/generateMemberReport`, params, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getMemberStatuses = async () =>
{
    try
    {
        const data = await axios.post(`${baseURL}/getMemberStatuses`, {}, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getEmploymentStatuses = async () =>
{
    try
    {
        const data = await axios.post(`${baseURL}/getEmploymentStatuses`, {}, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};
