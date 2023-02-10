import React, { useState, useEffect } from "react";
import moment from 'moment';
import { UploadOutlined, SaveOutlined, CloseSquareOutlined } from '@ant-design/icons';
import { Input, Form, Select, DatePicker, Upload, Button, Space, message } from 'antd';
import ModalLoading from '../../components/ModalLoading';

export default function RegistrationForm({
    form,
    onFinish,
    onFinishFailed,
    prov,
    setProv,
    districtNumber,
    setDistrictNumber,
    addr,
    setAddr,
    brgy,
    setBrgy,
    memberType,
    setMemberType,
    idNumber,
    setIdNumber,
    sick,
    setSick,
    getAllBarangay,
    municipalities,
    getAddress,
    chosenBarangay,
    setChosenBarangay,
    dtFormat,
    birthChanged,
    gender,
    civilStatus,
    bloodType,
    religion,
    educations,
    employmentStatus,
    handleClassification,
    classification,
    uploadProps,
    handleIllness,
    illnesses,
    formLoading,
    setFormLoading,
    saving,
    setShowModal,
    showModal,
    memberStatus,
    selectedItemForEdit,
    setSelectedItemForEdit,
    getMember,
    setMunicipality,
    formattedBday,
    setFormattedBday,
    reloadPage,
    illnessDefaultValues,
    setIllnessDefaultValues,
    formInitValues,
    setFormInitValues,
    saveDisabled,
    page
}) {

    const getEditableData = async (id) =>
    {
        try {
            setFormLoading(true);
            const { data } = await getMember({id, type: 'edit'});
            const user = data.user;
            let usrcls = user.classification;
            let usrsick = user.sickness;
            let bday = user.birth_date;

            if((usrcls) && (usrcls.indexOf(",") !== 0)) {
                usrcls = usrcls.split(",");
            }
            if((usrsick) && (usrsick.indexOf(",") !== 0)) {
                usrsick = usrsick.split(",");
            }

            setSick(usrsick);
            setMemberType(usrcls);
            let fbday = null;
            if(bday) {
                bday = moment(bday, 'MM-DD-YYYY');
                fbday = moment(bday, 'YYYY-MM-DD');
                setFormattedBday(fbday);
            } else {
                bday = null;
            }
            form.setFieldsValue({
                selected_illness: user.sickness,
                member_type: user.classification,
                formatted_bday: fbday,
                id_number: user.id_number,
                first_name: user.first_name,
                last_name: user.last_name,
                middle_name: user.middle_name,
                email: user.email,
                address: user.address,
                phone: user.phone,
                mobile: user.mobile,
                birth_date: bday,
                birth_place: user.birth_place,
                gender: user.gender,
                civil_status: user.civil_status,
                blood_type: user.blood_type,
                religion: user.religion,
                education: user.education,
                employment_status: user.employment_status,
                gsis: user.gsis,
                sss: user.sss,
                philhealth: user.philhealth,
                tin: user.tin,
                pension: user.pension,
                member_status: user.member_status,
                classification: usrcls,
                sickness: usrsick,
                contact_person: user.contact_person,
                contact_person_number: user.contact_person_number,
            });
            setFormLoading(false);
        } catch (error) {
            setFormLoading(false);
            message.error("Something went wrong");
        }
    }

  useEffect(() => {
    if(page == "registration") {
        setFormInitValues({
            province: prov,
        });
        form.setFieldsValue({
            province: prov,
        });
    } else {
        setFormInitValues({
            province: prov,
            district_no: districtNumber,
            municipality_name: addr,
            barangay_name: brgy,
            member_type: memberType,
            id_number: idNumber,
            selected_illness: sick,
            formatted_bday: formattedBday,
        });
        form.setFieldsValue({
            province: prov,
            district_no: districtNumber,
            municipality_name: addr,
            barangay_name: brgy,
            member_type: memberType,
            id_number: idNumber,
            selected_illness: sick,
            formatted_bday: formattedBday,
        });
        if(selectedItemForEdit)  {
            setFormInitValues({});
            getEditableData(selectedItemForEdit);
        }
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
        <div className="flex flex-wrap justify-left items-center mt-5 uppercase">
                { (page === 'add' || page === 'registration') && (
                    <>
                        <Form.Item name="id_number">
                            <Input type="hidden" id="id_number" value="" />
                        </Form.Item>
                        <Form.Item name="barangay_name">
                            <Input type="hidden" id="barangay_name" value="" />
                        </Form.Item>
                        <Form.Item name="municipality_name">
                            <Input type="hidden" id="municipality_name" value="" />
                        </Form.Item>
                        <Form.Item name="district_no">
                            <Input type="hidden" id="district_no" value="" />
                        </Form.Item>
                    </>
                )}
                <Form.Item name="member_type">
                    <Input type="hidden" id="member_type" value="" />
                </Form.Item>
                <Form.Item name="selected_illness">
                    <Input type="hidden" id="selected_illness" value="" />
                </Form.Item>
                <Form.Item name="formatted_bday">
                    <Input type="hidden" id="formatted_bday" value="" />
                </Form.Item>
                { page === 'edit' && (
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="ID Number" name="id_number" rules={[{ required: false }]}>
                            <Input style={{ width: '270px', backgroundColor: '#e6b82c' }} size="large" className="uppercase" readOnly={true} />
                        </Form.Item>
                    </div>
                )}
                { (page === 'add' || page === 'registration') && (
                <>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Region" name="region" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Region here ..." readOnly={true} />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Province" name="province" rules={[{ required: false }]}>
                            <Input style={{ width: '270px' }} size="large" className="uppercase" readOnly={true} />
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Municipality" name="municipality" rules={[{ required: true, message: 'Municipality is required.' }]}>
                            <Select
                                className="uppercase"
                                placeholder="Select a municipality here ..."
                                style={{ width: '270px' }}
                                size="large"
                                onChange={getAllBarangay}>
                                {" "}
                                {municipalities && municipalities.map((item, index) => <Select.Option value={item.municipality_code_number} key={index}>{item.municipality_name}</Select.Option>)}
                              </Select>
                        </Form.Item>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Barangay" name="barangay" rules={[{ required: true, message: 'Barangay is required.' }]}>
                            <Select
                                className="uppercase"
                                placeholder="Select a barangay here ..."
                                style={{ width: '270px' }}
                                size="large"
                                onChange={getAddress}>
                                {" "}
                                {chosenBarangay && chosenBarangay.map((item, index) => <Select.Option className="uppercase" value={item.id} key={index}>{item.barangay_name}</Select.Option>)}
                              </Select>
                        </Form.Item>
                    </div>
                </>
                )}
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="First Name" name="first_name" rules={[{ required: true, message: 'First Name is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your first name here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Middle Name" name="middle_name" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your middle name here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Last Name" name="last_name" rules={[{ required: true, message: 'Last Name is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your last name here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="E-mail Address" name="email" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your email address here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Address is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Telephone" name="phone" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your landline number here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Mobile No." name="mobile" rules={[{ required: true, message: 'Mobile number is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your mobile number here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Birthdate (mm-dd-yyyy)" name="birth_date" rules={[{ required: true, message: 'Birthdate is required.' }]}>
                        <DatePicker
                        format={dtFormat}
                        style={{ width: '270px' }}
                        size="large"
                        className="uppercase"
                        onChange={birthChanged}
                        placeholder="Pick a date here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Place of Birth" name="birth_place" rules={[{ required: true, message: 'Place of birth is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your birth place here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Sex " name="gender" rules={[{ required: true, message: 'Gender is required.' }]}>
                        <Select
                        className="uppercase"
                        placeholder="Select a gender here"
                        style={{ width: '270px' }}
                        size="large">
                            {" "}
                            {gender && gender.map((item, index) => <Select.Option className="uppercase" value={item.type} key={index}>{item.type}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Civil Status " name="civil_status" rules={[{ required: true, message: 'Civil Status is required.' }]}>
                        <Select
                        className="uppercase"
                        placeholder="Select a civil status here"
                        style={{ width: '270px' }}
                        size="large">
                            {" "}
                            {civilStatus && civilStatus.map((item, index) => <Select.Option className="uppercase" value={item.status} key={index}>{item.status}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Blood Type" name="blood_type" rules={[{ required: true, message: 'Blood type is required.' }]}>
                        <Select
                        className="uppercase"
                        placeholder="Select a blood type here"
                        style={{ width: '270px' }} size="large">
                            {" "}
                            {bloodType && bloodType.map((item, index) => <Select.Option className="uppercase" value={item.type} key={index}>{item.type}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Religion" name="religion" rules={[{ required: true, message: 'Religion is required.' }]}>
                        <Select
                        className="uppercase"
                        placeholder="Select a religion here"
                        style={{ width: '270px' }} size="large">
                            {" "}
                            {religion && religion.map((item, index) => <Select.Option className="uppercase" value={item.name} key={index}>{item.name}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Highest Educational Attainment" name="education" rules={[{ required: true, message: 'Educational attainment is required.' }]}>
                        <Select
                        className="uppercase"
                        placeholder="Select education here"
                        style={{ width: '270px' }} size="large">
                            {" "}
                            {educations && educations.map((item, index) => <Select.Option className="uppercase" value={item.level} key={index}>{item.level}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="GSIS" name="gsis" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your GSIS ID number here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="SSS" name="sss" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your SSS ID number here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="TIN" name="tin" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your TIN ID number here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="PhilHealth" name="philhealth" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your PhilHealth ID number here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Employment Status" name="employment_status" rules={[{ required: true, message: 'Employment status is required.' }]}>
                        <Select
                        className="uppercase"
                        placeholder="Select employment status here"
                        style={{ width: '270px' }} size="large">
                            {" "}
                            {employmentStatus && employmentStatus.map((item, index) => <Select.Option className="uppercase" value={item.status} key={index}>{item.status}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Classification" name="classification" rules={[{ required: true, message: 'Classification is required.' }]}>
                        <Select
                            className="uppercase"
                            onChange={handleClassification}
                            placeholder="Select a classification here"
                            style={{ width: '270px' }}
                            labelInValue
                            mode="multiple"
                            size="large"
                            tokenSeparators={[","]}
                        >
                            {" "}
                            {classification && classification.map((item, index) => <Select.Option className="uppercase" value={item.type} key={index}>{item.type}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Monthly Pension" name="pension" rules={[{ required: false }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your monthly pension here ..." />
                    </Form.Item>
                </div>

                { (page === 'add' || page === 'edit') && (
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Form.Item label="Member Status" name="member_status" rules={[{ required: true, message: 'Member Status is required.' }]}>
                            <Select
                            className="uppercase"
                            placeholder="Select member status here"
                            style={{ width: '270px' }} size="large">
                                {" "}
                                {memberStatus && memberStatus.map((item, index) => <Select.Option className="uppercase" value={item.status} key={index}>{item.status}</Select.Option>)}
                              </Select>
                        </Form.Item>
                    </div>
                )}

                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="In case of Emergency" name="contact_person" rules={[{ required: true, message: 'Contact person is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type your contact person here ..." />
                    </Form.Item>
                </div>
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Contact Number" name="contact_person_number" rules={[{ required: true, message: 'Emergency contact number is required.' }]}>
                        <Input style={{ width: '270px' }} size="large" className="uppercase" placeholder="Type the contact number of contact person here ..." />
                    </Form.Item>
                </div>
                { (page === 'add' || page === 'registration') && (
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                        <Upload {...uploadProps}>
                            <Button
                                size="large"
                                className="uppercase"
                                style={{ width: '270px' }}
                                icon={<UploadOutlined />}
                                >Click To Upload a Valid ID</Button>
                        </Upload>

                </div>
                )}
                <div className="w-full sm:w-6/12 md:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-3/12 px-10 py-0">
                    <Form.Item label="Common Illness and Sickness" name="sickness" rules={[{ required: false }]}>
                        <Select
                            className="uppercase"
                            onChange={handleIllness}
                            placeholder="Select a classification here"
                            style={{ width: '270px' }}
                            labelInValue
                            mode="multiple"
                            size="large"
                            tokenSeparators={[","]}
                        >
                            {" "}
                            {illnesses && illnesses.map((item, index) => <Select.Option className="uppercase" value={item.name} key={index}>{item.name}</Select.Option>)}
                          </Select>
                    </Form.Item>
                </div>

                <div className="w-full px-10 py-0">
                    <Form.Item>
                        <Space>
                            <button disabled={saveDisabled} className="px-8 py-3 w-64 border rounded-none bg-active uppercase text-xl hover:bg-yellow-500">
                                <Space size="middle"><SaveOutlined className="animate-pulse" />Save</Space>
                            </button>
                            { (page === 'add' || page === 'edit') && (
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    reloadPage();
                                }}
                                className="px-8 py-3 w-64 border rounded-none bg-sixth uppercase text-xl hover:bg-yellow-500">
                                <Space size="middle">
                                    <CloseSquareOutlined className="animate-pulse" />Close
                                </Space>
                            </button>
                            )}
                        </Space>
                    </Form.Item>
                </div>
        </div>
    </Form>
    </>
  );
}

