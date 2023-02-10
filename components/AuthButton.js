import React from 'react';
import { Space } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const AuthButton = ({ icon, animation, text, classType, clickEvent }) => {

    const renderIcon = () => {
     switch(icon) {
       case 'arrow_down': return <ArrowDownOutlined className={`${animation}`} />;
       case 'arrow_up': return <ArrowUpOutlined className={`${animation}`} />;
       case 'arrow_left': return <ArrowLeftOutlined className={`${animation}`} />;
       case 'arrow_right': return <ArrowRightOutlined className={`${animation}`} />;
     }
   }

   return (
        <button onClick={clickEvent} className={`${classType}`}>
            <Space>
                { renderIcon }
                { text }
            </Space>
        </button>
   )
}

export default AuthButton;
