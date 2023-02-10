import axios from "axios";
import Cookies from 'js-cookie';
const baseURL = `${process.env.NEXT_PUBLIC_API}/api`;
const token = Cookies.get('token');
const header = { headers: { 'Authorization': `Bearer ${token}`, }};

export const getUsers = async () =>
{
    try
    {
        const data = await axios.post(`${baseURL}/getUsers`, {}, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getUser = async (id) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/getUser`, { id }, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const getUserStatus = async (id) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/getUserStatus`, { id }, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const saveUser = async (user) =>
{
    try
    {
        const { data } = await axios.post(`${baseURL}/saveUser`, user, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const updateUser = async (user) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/updateUser`, user, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const deleteUser = async (id) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/deleteUser`, { id }, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const emailExist = async (email, page, id) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/emailExist`, { email, page, id }, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const checkPassword = async (password) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/checkPassword`, { password }, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const activateAccount = async (id, status) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/activateAccount`, { id, status }, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};

export const changePassword = async (user) =>
{
    try
    {
        const data = await axios.post(`${baseURL}/changePassword`, user, header);
        return data;
    } catch (error)
    {
        return error.response;
    }
};
