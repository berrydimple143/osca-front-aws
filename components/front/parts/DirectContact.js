import React from 'react';
import { Tooltip } from 'antd';

const DirectContact = ({ buttonClass, title, icon, onClick }) => {
    return (
        <Tooltip title={`${title}`} placement="top">
            <button onClick={onClick} className={`${buttonClass}`}>{ icon }</button>
        </Tooltip>
    );
}

export default DirectContact;
