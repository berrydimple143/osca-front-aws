import React, { useState } from "react";
import { Space } from 'antd';
import PrintCanvas from '../../components/admin/PrintCanvas';

export default function PrintModal({
    children,
    showPrintModal,
    setShowPrintModal,
    selectedItemForPrint,
    handlePrinter,
    componentRefBack,
    componentRef,
    closePrint,
    mtitle
}) {
  return (
    <>
      {showPrintModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t">
                  &nbsp;
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <PrintCanvas ref={componentRef} selectedItemForPrint={selectedItemForPrint} position={'front'} />
                  <PrintCanvas ref={componentRefBack} selectedItemForPrint={selectedItemForPrint} position={'back'} />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <Space>
                  <button
                    onClick={handlePrinter}
                    className="bg-green-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Print
                  </button>
                  <button
                    className="bg-red-500 text-white font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={closePrint}
                  >
                    Close
                  </button>
                  </Space>
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
