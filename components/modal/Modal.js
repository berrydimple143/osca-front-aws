import React, { useState } from "react";

export default function ModalForm({
    children,
    showModal,
    setShowModal,
    mtitle
}) {
  return (
    <>
      {showModal ? (
        <>
          <div
              className="justify-center items-center absolute top-0 left-0 flex inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto max-w-full">
                {/*content*/}
                <div className="border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-2 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-lg font-semibold">
                      { mtitle }
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    { children }
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
