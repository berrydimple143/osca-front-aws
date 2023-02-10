import axios from "axios";
import Cookies from 'js-cookie';
const baseURL = `${process.env.NEXT_PUBLIC_API}/api`;
const token = Cookies.get('token');
const header = { headers: { 'Authorization': `Bearer ${token}`, }};

export const getRoles = async () =>
{
    try
    {
        const data = await axios.post(`${baseURL}/getRoles`, {}, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};
