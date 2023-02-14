import React, { useState, useEffect } from "react";
import ModalLoading from '../../components/ModalLoading';
import { Input, Form, Select, Button, Space, message } from 'antd';
import { SaveOutlined, CloseSquareOutlined } from '@ant-design/icons';

const FillupForm = ({
    roleData,
    form,
    onFinish,
    onFinishFailed,
    formLoading,
    setFormLoading,
    setShowModal,
    reloadPage,
    selectedItemForEdit,
    getUser,
    formInitValues,
    setFormInitValues,
    checkEmail,
    hasMunicipality,
    handleMunicipality,
    municipalities,
    handleSelectedMunicipalities,
    setHasMunicipality,
    saving
}) => {

    const getEditableData = async (id) =>
    {
        try
        {
            setFormLoading(true);
            const { data } = await getUser(id);
            const user = data.user;
            if(data.user_status == "success")
            {
                form.setFieldsValue({
                    last_name: user.last_name,
                    first_name: user.first_name,
                    middle_name: user.middle_name,
                    email: user.email,
                    role: user.role,
                });
                if(user.role == "team lead" || user.role == "encoder")
                {
                    setHasMunicipality(true);
                    let mun = user.municipality;
                    if((mun) && (mun.indexOf(",") !== 0)) {
                        mun = mun.split(",");
                    }
                    form.setFieldsValue({
                        municipality: mun
                    });
                }
            }
            setFormLoading(false);
        } catch (error) {
            setFormLoading(false);
            console.log(error);
            message.error("Something went wrong");
        }
    }

    useEffect(() => {
        if(selectedItemForEdit)  {
            setFormInitValues({});
            getEditableData(selectedItemForEdit);
        }
    }, []);

    return (
        <>
            {(formLoading) && (
                <ModalLoading
                    message="Loading, please wait ..."
                    pcolor="bg-yellow-500"
                />
            )}
            {(saving) && (
                <ModalLoading
                    message="Saving, please wait ..."
                    pcolor="bg-green-500"
                />
            )}

            <Form
                layout="vertical"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={formInitValues}
            >
                <Form.Item name="selected_municipalities">
                    <Input type="hidden" id="selected_municipalities" value="" />
                </Form.Item>
                <div className="flex flex-wrap w-100 justify-left items-center">
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0">
                        <Form.Item label="First Name" name="first_name" rules={[{ required: true, message: 'First Name is required.' }]}>
                            <Input style={{ width: '270px' }} size="large" placeholder="First name here ..." />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0">
                        <Form.Item label="Last Name" name="last_name" rules={[{ required: true, message: 'Last Name is required.' }]}>
                            <Input style={{ width: '270px' }} size="large" placeholder="Last name here ..." />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0">
                        <Form.Item label="Middle Name (Optional)" name="middle_name" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" placeholder="Middle name here ..." />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0">
                        <Form.Item label="Email" name="email" rules={[
                            { required: true, message: 'Email is required.' },
                            { type: 'email', message: 'Invalid email address.' }
                            ]}>
                            <Input
                                onChange={checkEmail}
                                style={{ width: '270px' }}
                                size="large"
                                placeholder="Email here ..."
                            />
                        </Form.Item>
                    </div>
                    { !selectedItemForEdit && (
                        <div className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0">
                            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Password is required.' }]}>
                                <Input.Password style={{ width: '270px' }} size="large" placeholder="Type your password here ..." />
                            </Form.Item>
                        </div>
                    )}
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0">
                        <Form.Item label="Role" name="role" rules={[{ required: true, message: 'Role is required.' }]}>
                            <Select
                                onChange={handleMunicipality}
                                placeholder="Select a role here ..."
                                style={{ width: '270px' }}
                                size="large"
                                >
                                {" "}
                                {roleData && roleData.map((item, index) => <Select.Option value={item.name} key={index}>{item.name}</Select.Option>)}
                            </Select>
                        </Form.Item>
                    </div>
                    { hasMunicipality && (
                        <div className="w-full sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-6/12 2xl:w-6/12 px-5 py-0">
                            <Form.Item label="Municipality" name="municipality" rules={[{ required: true, message: 'Municipality is required.' }]}>
                                <Select
                                    onChange={handleSelectedMunicipalities}
                                    placeholder="Select municipality here ..."
                                    style={{ width: '270px' }}
                                    mode="multiple"
                                    size="large"
                                    labelInValue
                                    tokenSeparators={[","]}
                                    >
                                    {" "}
                                    {municipalities && municipalities.map((item, index) => <Select.Option value={item.municipality_code_number} key={index}>{item.municipality_name}</Select.Option>)}
                                </Select>
                            </Form.Item>
                        </div>
                    )}
                    <div className="w-full px-5 py-0">
                        <Form.Item>
                            <Space>
                                <button className="px-4 py-1 w-32 border rounded-none bg-active uppercase text-md hover:bg-yellow-500">
                                    <Space size="middle"><SaveOutlined className="animate-pulse" />Save</Space>
                                </button>
                                <button
                                    onClick={() => {
                                        setShowModal(false);
                                        reloadPage();
                                    }}
                                    className="px-4 py-1 w-32 border rounded-none bg-sixth uppercase text-md hover:bg-yellow-500">
                                    <Space size="middle">
                                        <CloseSquareOutlined className="animate-pulse" />Close
                                    </Space>
                                </button>
                            </Space>
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </>
    );
}

export default FillupForm;
