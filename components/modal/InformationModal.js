import React, { useState } from "react";
import { Input, Form, Select, Space, message } from 'antd';
import { CloseSquareOutlined } from '@ant-design/icons';

export default function InformationModal({
  children,
  setShowInformationModal,
  memberInfo,
  photo,
  transaction,
  reloadPage
}) {

  return (
      <>
          <div
            className="justify-center items-center flex overflow-x-hidden fixed overflow-y-auto inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-7xl">
              <div className="border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-3 flex-auto">
                     <div className="flex w-150 justify-left items-center">

                          <div className="w-full px-4 pt-28">
                              <table>
                                <tbody>
                                  { photo && (
                                    <tr>
                                      <td colspan="3" className="whitespace-nowrap">
                                        <div className="w-28 border p-1"><img src={`${photo}`} /></div>
                                      </td>
                                    </tr>
                                  )}
                                  <tr className="border bg-yellow-500">
                                    <td colspan="3" className="pt-0"><h1 className="text-center font-bold text-lg text-yellow-900 w-200">Personal Information</h1></td>
                                  </tr>
                                  <tr className="border">
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-16">ID Number:</h1> <h1>{memberInfo.id_number}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-24">Age:</h1> <h1>{memberInfo.age} yrs. old</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap">&nbsp;</td>
                                  </tr>
                                  <tr className="border">
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-16">First Name:</h1> <h1>{memberInfo.first_name}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-24">Middle Name:</h1> <h1>{memberInfo.middle_name}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-20">Last Name:</h1> <h1>{memberInfo.last_name}</h1></Space></td>
                                  </tr>
                                  <tr className="border">
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-16">Address:</h1> <h1>{memberInfo.address}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-24">E-mail Address:</h1> <h1>{memberInfo.email}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-20">Telephone:</h1> <h1>{memberInfo.phone}</h1></Space></td>
                                  </tr>
                                  <tr className="border">
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-16">Mobile No.:</h1> <h1>{memberInfo.mobile}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-24">Date of Birth:</h1> <h1>{memberInfo.birth_date}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-20">Place of Birth:</h1> <h1>{memberInfo.birth_place}</h1></Space></td>
                                  </tr>
                                  <tr className="border">
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-16">Gender:</h1> <h1>{memberInfo.gender}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-24">Civil Status:</h1> <h1>{memberInfo.civil_status}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-20">Blood Type:</h1> <h1>{memberInfo.blood_type}</h1></Space></td>
                                  </tr>
                                  <tr className="border">
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-16">Religion:</h1> <h1>{memberInfo.religion}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-52">Highest Educational Attainment:</h1> <h1>{memberInfo.education}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-20">GSIS:</h1> <h1>{memberInfo.gsis}</h1></Space></td>
                                  </tr>
                                  <tr className="border">
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-16">SSS:</h1> <h1>{memberInfo.sss}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-24">TIN:</h1> <h1>{memberInfo.tin}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-20">PhilHealth:</h1> <h1>{memberInfo.philhealth}</h1></Space></td>
                                  </tr>
                                  <tr className="border">
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-32">Employment Status:</h1> <h1>{memberInfo.employment_status}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-24">Member Status:</h1> <h1>{memberInfo.member_status}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-20">Classification:</h1> <h1>{memberInfo.classification}</h1></Space></td>
                                  </tr>
                                  <tr className="border">
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-32">Monthly Pension:</h1> <h1>{memberInfo.pension}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-36">In case of Emergency:</h1> <h1>{memberInfo.contact_person}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-28">Contact Number:</h1> <h1>{memberInfo.contact_person_number}</h1></Space></td>
                                  </tr>
                                  <tr className="border bg-yellow-500">
                                    <td colspan="3" className="p-0"><h1 className="text-center font-bold text-lg text-yellow-900 w-200">Vaccination Information</h1></td>
                                  </tr>
                                  <tr className="border">
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-24">Vaccine Name:</h1> <h1>{memberInfo.vaccine}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-40">Vaccination Dose/Stage:</h1> <h1>{memberInfo.dose}</h1></Space></td>
                                    <td className="w-95 border p-1 whitespace-nowrap"><Space><h1 className="font-bold text-black w-28">Vaccination Date:</h1> <h1>{memberInfo.vaccination_date}</h1></Space></td>
                                  </tr>
                                </tbody>
                              </table>
                              <table>
                                <tbody>
                                  <tr className="border bg-yellow-500">
                                    <td colspan="5" className="p-0"><h1 className="text-center font-bold text-lg text-yellow-900 w-200">Inventory and Monitoring</h1></td>
                                  </tr>
                                  <tr className="border">
                                    <td className="w-89 border p-1 whitespace-nowrap"><h1 className="font-bold text-black w-24">Senior ID Inventory</h1></td>
                                    <td className="w-89 border p-1 whitespace-nowrap"><h1 className="font-bold text-black w-24">Date of Release</h1></td>
                                    <td className="w-89 border p-1 whitespace-nowrap"><h1 className="font-bold text-black w-24">Municipality</h1></td>
                                    <td className="w-89 border p-1 whitespace-nowrap"><h1 className="font-bold text-black w-24">Released by</h1></td>
                                    <td className="w-89 border p-1 whitespace-nowrap"><h1 className="font-bold text-black w-24">Remarks</h1></td>
                                  </tr>
                                  <>
                                    {transaction && transaction.map((item, index) =>

                                      <tr className="border" key={index}>
                                        <td className="w-89 border p-1 whitespace-nowrap"><h1 className="font-bold text-black w-24">{item.name}</h1>
                                        </td>
                                        <td className="w-89 border p-1 whitespace-nowrap"><h1 className="font-bold text-black w-24">{item.release_date}</h1>
                                        </td>
                                        <td className="w-89 border p-1 whitespace-nowrap"><h1 className="font-bold text-black w-24">{item.office_released}</h1>
                                        </td>
                                        <td className="w-89 border p-1 whitespace-nowrap"><h1 className="font-bold text-black w-24">{item.released_by}</h1>
                                        </td>
                                        <td className="w-89 border p-1 whitespace-nowrap"><h1 className="font-bold text-black w-24">{item.remarks}</h1>
                                        </td>
                                      </tr>

                                    )}
                                  </>
                                  <tr>
                                    <td colspan="5" className="pt-4">
                                      <button
                                        onClick={() => {
                                            setShowInformationModal(false);
                                            reloadPage();
                                        }}
                                        className="px-4 py-1 w-32 border rounded-none bg-sixth uppercase text-md hover:bg-yellow-500">
                                        <Space size="middle">
                                            <CloseSquareOutlined className="animate-pulse" />Close
                                        </Space>
                                    </button>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                          </div>
                      </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
       </>
  );
}
