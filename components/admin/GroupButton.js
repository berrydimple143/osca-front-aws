import React, { useEffect } from 'react';
import { Tooltip } from 'antd';

import {
    PrinterOutlined,
    ThunderboltOutlined,
    CameraOutlined,
    EditOutlined,
    MedicineBoxOutlined,
    KeyOutlined,
    UserOutlined,
    DeleteOutlined } from '@ant-design/icons';

const GroupButton = ({
    handleActivation,
    text,
    setSelectedItemForEdit,
    getPasswordId,
    setSelectedItemForDelete,
    setShowDeleteModal,
    setShowModal,
    status,
    setPage,
    getMemberID,
    handlePrint,
    handleSignature,
    handleCamera,
    userPage,
    handleVaccination,
    memberPage
}) =>
{
    useEffect(() => {

    }, []);
    return (
        <div className="inline-flex rounded-none shadow-sm" role="group" key={`${text}`}>
          { memberPage && (
          <>
          <Tooltip title="Print ID" placement="top">
          <button
           onClick={() => handlePrint(text) }
          type="button" className="py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <PrinterOutlined />
          </button>
          </Tooltip>
          <Tooltip title="Signature" placement="top">
          <button
            onClick={() => handleSignature(text) }
            type="button" className="py-1 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <ThunderboltOutlined />
          </button>
          </Tooltip>
          <Tooltip title="Take a photo" placement="top">
          <button
            onClick={() => handleCamera(text) }
            type="button" className="py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <CameraOutlined />
          </button>
          </Tooltip>
          <Tooltip title="Edit" placement="top">
          <button
            onClick={() => {
              setSelectedItemForEdit(text);
              setPage("edit");
              setShowModal(true);
            }}
            type="button" className="py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <EditOutlined />
          </button>
          </Tooltip>
          <Tooltip title="Add vaccination information" placement="topRight">
          <button
            onClick={() => handleVaccination(text) }
            type="button" className="py-1 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <MedicineBoxOutlined />
          </button>
          </Tooltip>
          <Tooltip title="Delete" placement="topRight">
          <button
            onClick={() => getMemberID(text) }
            type="button" className="py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <DeleteOutlined />
          </button>
          </Tooltip>
          </>
          )}
          { userPage && (
          <>
            <Tooltip title={`${ status === '1' ? 'De-activate' : 'Activate' }`} placement="top">
            <button
              onClick={() => handleActivation(text) }
              type="button" className="py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              <UserOutlined />
            </button>
            </Tooltip>
            <Tooltip title="Change Password" placement="top">
            <button
              onClick={() => getPasswordId(text) }
              type="button" className="py-1 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              <KeyOutlined />
            </button>
            </Tooltip>
            <Tooltip title="Edit" placement="top">
            <button
              onClick={() => {
                setSelectedItemForEdit(text);
                setPage("edit");
                setShowModal(true);
              }}
              type="button" className="py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              <EditOutlined />
            </button>
            </Tooltip>
            <Tooltip title="Delete" placement="top">
            <button
              onClick={() => getMemberID(text) }
              type="button" className="py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-none border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              <DeleteOutlined />
            </button>
            </Tooltip>
          </>
          )}
        </div>
    );
}

export default GroupButton;
