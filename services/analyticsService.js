import axios from "axios";
import Cookies from 'js-cookie';
const baseURL = `${process.env.NEXT_PUBLIC_API}/api`;

export const getMunicipalitiesMembers = async () =>
{
    try
    {
        let token = Cookies.get('token');
        const data = await axios.get(`${baseURL}/get-municipalities-members`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        return data;
    } catch (error)
    {
        return error.response;
    }
};
