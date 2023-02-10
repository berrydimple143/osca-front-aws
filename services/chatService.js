import axios from "axios";
import Cookies from 'js-cookie';
const baseURL = `${process.env.NEXT_PUBLIC_API}/api`;
const token = Cookies.get('token');
const header = { headers: { 'Authorization': `Bearer ${token}`, }};

export const getMessages = async (params) =>
{
    try
    {
        const { data } = await axios.post(`${baseURL}/getMessages`, params, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const sendMessage = async (message) =>
{
    try
    {
        const { data } = await axios.post(`${baseURL}/sendMessage`, message);
        return data;
    } catch (error)
    {
        return error.response;
    }
};
