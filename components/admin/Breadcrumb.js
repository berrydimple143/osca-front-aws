import React, { useState, useRef, useEffect } from 'react';
import { message, Form, Menu, Dropdown, Space } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import PasswordModal from '../../components/modal/PasswordModal';
import { checkPassword, changePassword } from '../../services/userService';
import { DownOutlined, KeyOutlined, LogoutOutlined } from '@ant-design/icons';

const Breadcrumb = ({ title }) =>
{
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [selectedItemForPassword, setSelectedItemForPassword] = useState('');
    const [username, setUsername] = useState('');
    const [form] = Form.useForm();
    const router = useRouter();
    const newPasswordRef = useRef();
    const oldPasswordRef = useRef();

    const showPasswordForm = () =>
    {
        setShowPasswordModal(true);
    }

    const menu = (
        <Menu
          items={[
            {
              label: (
                <a onClick={showPasswordForm} className="cursor-pointer">
                    <Space><KeyOutlined />Change Password</Space>
                    <hr className='divider' />
                </a>
              ),
            },
            {
              label: (
                <Link href='/logout'>
                    <Space><LogoutOutlined />Logout</Space>
                    <hr className='divider' />
                </Link>
              ),
            },
          ]}
        />
    );

    const reloadPage = () =>
    {
        router.reload(window.location.pathname);
    }

    const onPasswordFinish = async (values) =>
    {
        setShowPasswordModal(false);
        values.type = 'admin';
        const { data } = await changePassword(values);
        message.success('Password changed successfully.');
        router.reload(window.location.pathname);
    }
    const getPassword = async (e) =>
    {
        const { data } = await checkPassword(e.target.value);
        if(data.password_status == "not match") {
            oldPasswordRef.current.focus();
            message.error("You forgot your old password.");
            form.setFieldsValue({
                old_password: ''
            });
        } else {
            newPasswordRef.current.focus();
        }
    }
    useEffect(() => {
        if(Cookies.get('loggedIn')) {
            setUsername(Cookies.get('user_first_name'));
        }
    }, []);

    return (
        <div className="flex justify-between px-5 mb-2 text-md text-gray-500 bg-gradient-to-t from-yellow-200 to-yellow-50 font-semibold text-shadow-sm rounded-b-full">
            <PasswordModal
                form={form}
                setShowPasswordModal={setShowPasswordModal}
                showPasswordModal={showPasswordModal}
                onPasswordFinish={onPasswordFinish}
                selectedItemForPassword={selectedItemForPassword}
                reloadPage={reloadPage}
                getPassword={getPassword}
                newPasswordRef={newPasswordRef}
                oldPasswordRef={oldPasswordRef}
            />
            <div className="flex w-breadcrumb">
                {
                    title.map((t, i) => (
                        <>
                            <h1 key={i}>{t}</h1>
                            <span>&nbsp;&nbsp;</span>
                        </>
                    ))
                }
            </div>
            <div>
                <Dropdown overlay={menu}>
                    <div className="cursor-pointer">
                        <Space>
                            Welcome, {`${username}`}
                            <DownOutlined />
                        </Space>
                    </div>
                </Dropdown>
            </div>
        </div>
    )
}

export default Breadcrumb;
