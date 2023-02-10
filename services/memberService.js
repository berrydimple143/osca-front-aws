import axios from "axios";
import Cookies from 'js-cookie';
const baseURL = `${process.env.NEXT_PUBLIC_API}/api`;
const token = Cookies.get('token');
const header = { headers: { 'Authorization': `Bearer ${token}`, }};

export const saveMemberTransaction = async (params) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/saveMemberTransaction`, params, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const uploadImage = async (params) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/uploadImage`, params, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getDosageLevel = async () =>
{
    try
    {
        const data = await axios.post(`${baseURL}/getDosageLevel`, {}, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const saveVaccinationInfo = async (user) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/saveVaccinationInfo`, user, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getCanvasData = async (id, host) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/getCanvasData`, { id, host }, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const userCamera = async (id, info) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/userCamera`, { id, info }, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const vaccineIdCamera = async (id, info) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/vaccineIdCamera`, { id, info }, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const userSignature = async (id, info) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/userSignature`, { id, info }, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getMembers = async (mtype, mun, bar, stype) =>
{
    try
    {
        const params = { mtype, mun, bar, stype };
        const data = await axios.post(`${baseURL}/getMembers`, params, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getExport = async (mtype, mun, bar) =>
{
    try
    {
        const params = { mtype, mun, bar };
        const data = await axios.post(`${baseURL}/exportData`, params, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const updateMember = async (user) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/updateMember`, user, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getMember = async (params) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/getMember`, params, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const deleteMember = async (id) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/deleteMember`, { id }, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};
