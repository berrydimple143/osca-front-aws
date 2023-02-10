import axios from "axios";
const baseURL = `${process.env.NEXT_PUBLIC_API}/api`;
const rootURL = process.env.NEXT_PUBLIC_API;

export const sendEmail = async (info) =>
{
    try
    {
        const { data } = await axios.post(`${baseURL}/sendEmail`, info);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getDetails = async () =>
{
    try
    {
        const { data } = await axios.get(`${baseURL}/get-details`);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getMunicipalities = async () =>
{
    try
    {
        const { data } = await axios.post(`${baseURL}/get-municipalities`);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getSpecificMunicipalities = async (mun) =>
{
    try
    {
        const { data } = await axios.get(`${baseURL}/getSpecificMunicipalities/${mun}`);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getBarangayData = async (info) =>
{
    try
    {
        const { data } = await axios.post(`${baseURL}/get-barangay-data`, info);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getBarangays = async (mun) =>
{
    try
    {
        const { data } = await axios.get(`${baseURL}/get-barangays/${mun}`);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getGeneratedId = async (mun, dist) =>
{
    try
    {
        const { data } = await axios.get(`${baseURL}/generate-and-get-id/${mun}/${dist}`);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const seniorIdExist = async (idNumber) =>
{
    try
    {
        const { data } = await axios.get(`${baseURL}/check-id-number/${idNumber}`);
        return data;
    } catch (error)
    {
        return error.response;
    }
};
