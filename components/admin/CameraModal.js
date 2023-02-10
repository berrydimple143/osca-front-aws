import React, { useState } from "react";
import Camera from '../../components/admin/Camera';
import ModalLoading from '../../components/ModalLoading';

export default function CameraModal({
    children,
    showCameraModal,
    setShowCameraModal,
    selectedItemForCamera,
    setSaving,
    saving,
    userCamera,
    mtitle,
    setShowCardSuccess,
    setSuccessMessage,
    setUploadData,
    page
}) {
  return (
    <>
    {(saving) && (
        <ModalLoading
            message="Saving, please wait ..."
            pcolor="bg-green-500"
        />
    )}
      {showCameraModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-4 mx-auto max-w-3xl">
              <div className="border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">
                    {mtitle}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowCameraModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <Camera
                    setUploadData={setUploadData}
                    setSuccessMessage={setSuccessMessage}
                    setShowCardSuccess={setShowCardSuccess}
                    setShowCameraModal={setShowCameraModal}
                    userCamera={userCamera}
                    selectedItemForCamera={selectedItemForCamera}
                    setSaving={setSaving}
                    page={page}
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
