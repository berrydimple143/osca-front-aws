import React, { useState } from "react";
import Signature from '../../components/admin/Signature';
import ModalLoading from '../../components/ModalLoading';

export default function SignatureModal({
    children,
    showSignatureModal,
    setShowSignatureModal,
    selectedItemForSignature,
    setSaving,
    saving,
    userSignature,
    mtitle
}) {
  return (
    <>
    {(saving) && (
        <ModalLoading
            message="Saving, please wait ..."
            pcolor="bg-green-500"
        />
    )}
      {showSignatureModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-4 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {mtitle}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowSignatureModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <Signature
                    setShowSignatureModal={setShowSignatureModal}
                    selectedItemForSignature={selectedItemForSignature}
                    setSaving={setSaving}
                    userSignature={userSignature}
                  />
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
