import React from 'react';
import { CheckOutlined } from '@ant-design/icons';

const SuccessAlert = ({ title }) =>
{
    return (
        <div className="flex bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{ title }</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <CheckOutlined />
          </span>
        </div>
    );
}

export default SuccessAlert;
