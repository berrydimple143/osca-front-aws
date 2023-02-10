import React, { useState } from "react";
import { Input, Form, Select, Space, DatePicker, Upload, message, Button } from 'antd';
import { SaveOutlined, CloseSquareOutlined, UploadOutlined } from '@ant-design/icons';

export default function VaccinationModal({
    children,
    form,
    showVaccinationModal,
    setShowVaccinationModal,
    selectedItemForVaccine,
    onVaccineFinish,
    dosageLevel,
    reloadPage,
    CameraModal,
    userCamera,
    ModalLoading,
    saving,
    setSaving,
    showCameraModal,
    setShowCameraModal,
    SuccessAlert,
    fileURL,
    vaccineDate,
    setUploadData
}) {
  const [showCardUploadButton, setShowCardUploadButton] = useState(false);
  const [showCardSuccess, setShowCardSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const onUpload = async (info) =>
  {
    let filename = info.file.name;
    if (info.file.status !== 'uploading') {
      let src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(info.file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
      setUploadData(src);
      setSuccessMessage('Vaccine card was uploaded and prepared for saving.');
      setShowCardUploadButton(false);
      setShowCardSuccess(true);
    }
    if (info.file.status === 'done') {
      message.success(`${filename} vaccine card uploaded successfully`);
    } else if (info.file.status === 'error') {
      setUploadData(null);
      message.error(`${filename} vaccine card upload failed.`);
    }
  }

  const uploadProps = {
        name: 'card',
        accept: ".png, .jpeg, .jpg, .gif",
        action: fileURL,
        headers: {
          authorization: 'authorization-text',
        },
        onRemove(info) {
          setUploadData(null);
        },
        onChange: onUpload,
  };

  const selectMethod = (val) =>
  {
      if(val == "picture")
      {
        setShowCameraModal(true);
      } else if(val == "upload")
      {
        setShowCardUploadButton(true);
      }
  }
  return (
      <>
        {(saving) && (
            <ModalLoading
                message="Saving, please wait ..."
                pcolor="bg-green-500"
            />
        )}
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-none shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between pl-5 pt-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">VACCINATION INFORMATION</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowVaccinationModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-3 flex-auto">
                    <CameraModal
                        setUploadData={setUploadData}
                        setSuccessMessage={setSuccessMessage}
                        setShowCardSuccess={setShowCardSuccess}
                        setShowCameraModal={setShowCameraModal}
                        showCameraModal={showCameraModal}
                        selectedItemForCamera={selectedItemForVaccine}
                        setSaving={setSaving}
                        saving={saving}
                        userCamera={userCamera}
                        mtitle={'Please take a picture of your card below:'}
                        page={'vaccine'}
                    />
                    <Form
                        layout="vertical"
                        form={form}
                        onFinish={onVaccineFinish}
                    >
                       <div className="flex flex-wrap w-90 justify-left items-center">
                            <Form.Item name="formatted_vdate">
                                <Input type="hidden" id="formatted_vdate" value="" />
                            </Form.Item>
                            <div className="w-full px-5 py-0">
                                <Form.Item label="Stage/Dose:" name="dose" rules={[{ required: true, message: 'Stage/Dose is required.' }]}>
                                    <Select
                                        placeholder="Select dosage level here ..."
                                        style={{ width: '350px' }}
                                        size="large"
                                        >
                                        {" "}
                                        {dosageLevel && dosageLevel.map((item, index) => <Select.Option value={item.level} key={index}>{item.level}</Select.Option>)}
                                    </Select>
                                </Form.Item>
                            </div>
                            <div className="w-full px-5 py-0">
                                <Form.Item label="Name of Vaccine:" name="vaccine" rules={[{ required: true, message: 'Name of Vaccine is required.' }]}>
                                    <Input style={{ width: '350px' }} size="large" placeholder="Name of Vaccine here ..." />
                                </Form.Item>
                            </div>
                            <div className="w-full px-5 py-0">
                                <Form.Item label="Date of Vaccination:" name="vaccination_date" rules={[{ required: true, message: 'Date of Vaccination is required.' }]}>
                                    <DatePicker
                                    format='MM-DD-YYYY'
                                    style={{ width: '350px' }}
                                    onChange={vaccineDate}
                                    size="large"
                                    placeholder="Pick a date here ..." />
                                </Form.Item>
                            </div>
                            <div className="w-full px-5 py-0">
                                <Form.Item label="Vaccination Card:" name="method" rules={[{ required: false }]}>
                                    { !showCardUploadButton && !showCardSuccess && (
                                      <Select
                                          onChange={selectMethod}
                                          placeholder="Select method here ..."
                                          style={{ width: '350px' }}
                                          size="large"
                                          >
                                          {" "}
                                          <Select.Option value='upload'>Upload a card</Select.Option>
                                          <Select.Option value='picture'>Take a picture</Select.Option>
                                      </Select>
                                    )}
                                    { showCardUploadButton && (
                                      <Upload {...uploadProps}>
                                          <Button
                                              size="large"
                                              style={{ width: '350px' }}
                                              icon={<UploadOutlined />}
                                              >Click To Upload a Vaccine Card</Button>
                                      </Upload>
                                    )}
                                    { showCardSuccess && (
                                      <SuccessAlert title={`${successMessage}`} />
                                    )}
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
                                                setShowVaccinationModal(false);
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
  );
}
