import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_URL;

export const searchURL = async (url) =>
{
        try
        {
            const data = await scrapeHtmlWeb(options);
            return data;
        } catch (error)
        {
            return error.response;
        }
};
