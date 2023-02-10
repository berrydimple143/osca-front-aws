import moment from 'moment';
import { notification } from 'antd';

export const IsUnderAge = (date) =>
{
    let a = moment();
    let b = moment(date, 'YYYY-MM-DD');
    let age = a.diff(b, 'years');
    if(age < 60) {
        return true;
    }
    return false;
};

export const getMunicipalitiesObject = (mun) =>
{
    let muni = {};
    mun.map((item, index) => {
        muni[item.municipality_name] = item.municipality_code_number;
    });
    return muni;
};

export const getAgeFromDate = (date) =>
{
    let a = moment();
    let b = moment(date, 'YYYY-MM-DD');
    let age = a.diff(b, 'years');
    return age;
};

export const formatDate = (date, fmt) =>
{
    let newDate = moment(date).format(fmt);
    return newDate;
};

export const showNotification = (type, title, txt1, txt2) =>
{
    return notification[type]({
            message: title,
            description: (
              <>
                {txt1}
                <br />
                {txt2}
              </>
            ),
            placement: 'top',
            top: "30%"
        });
}
