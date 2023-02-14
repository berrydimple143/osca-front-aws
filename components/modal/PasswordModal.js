import React, { useState } from "react";
import { Input, Form, Space } from 'antd';
import { SaveOutlined, CloseSquareOutlined } from '@ant-design/icons';

export default function PasswordModal({
    children,
    form,
    showPasswordModal,
    setShowPasswordModal,
    selectedItemForPassword,
    onPasswordFinish,
    reloadPage,
    newPasswordRef,
    oldPasswordRef,
    getPassword
}) {
  return (
    <>
      {showPasswordModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Password Change Confirmation</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowPasswordModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <Form
                        layout="vertical"
                        form={form}
                        onFinish={onPasswordFinish}
                    >
                        <div className="flex flex-wrap w-90 justify-left items-center">

                            { !selectedItemForPassword && (
                              <div className="w-full px-5 py-0">
                                  <Form.Item label="Old Password" name="old_password" rules={[{ required: true, message: 'Old password is required.' }]}>
                                      <input
                                        type="password"
                                        ref={oldPasswordRef}
                                        className="border border-gray-300 p-2 hover:border-blue-300"
                                        placeholder="Type your old password here ..."
                                        style={{ width: '350px' }}
                                        onBlur={getPassword}
                                      />
                                  </Form.Item>
                              </div>
                            )}

                            <div className="w-full px-5 py-0">
                                <Form.Item label="New Password" name="password" rules={[{ required: true, message: 'New password is required.' }]}>
                                    <Input.Password
                                      ref={newPasswordRef}
                                      style={{ width: '350px' }}
                                      size="large"
                                      placeholder="Type your new password here ..."
                                    />
                                </Form.Item>
                            </div>
                            <div className="w-full px-5 py-0">
                              <Form.Item
                                label="Confirm New Password"
                                name="confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please confirm your new password!',
                                  },
                                  ({ getFieldValue }) => ({
                                    validator(_, value) {
                                      if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                      }
                                      return Promise.reject(new Error('New password does not match with password confirmation!'));
                                    },
                                  }),
                                ]}
                                >
                                  <Input.Password style={{ width: '350px' }} size="large" placeholder="Type your password here ..." />
                              </Form.Item>
                            </div>
                            <div className="w-full px-5 py-0">
                                <Form.Item>
                                    <Space>
                                        <button className="px-4 py-1 w-32 border rounded-none bg-active uppercase text-md hover:bg-yellow-500">
                                            <Space size="middle"><SaveOutlined className="animate-pulse" />Save</Space>
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowPasswordModal(false);
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
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
