import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { message, notification, Form } from 'antd';
import Hero from '../components/front/Hero';
import SiteLayout from '../components/layouts/SiteLayout';
import RegistrationForm from '../components/forms/RegistrationForm';
import { register } from '../services/authService';
import { IsUnderAge, showNotification, formatDate } from '../services/helperService';
import { dateFormat, uploadURL } from '../services/configService';
import { getDetails, getBarangays, getGeneratedId, seniorIdExist } from '../services/dataService';

export function getStaticProps() {
    const dtFormat= dateFormat();
    const fileURL = uploadURL();
    return {
        props: {
          dtFormat,
          fileURL,
        },
    };
}

export default function Registration({ dtFormat, fileURL }) {
    const [formLoading, setFormLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [saveDisabled, setSaveDisabled] = useState(false);
    const [municipalities, setMunicipalities] = useState([]);
    const [chosenBarangay, setChosenBarangay] = useState([]);
    const [gender, setGender] = useState([]);
    const [civilStatus, setCivilStatus] = useState([]);
    const [bloodType, setBloodType] = useState([]);
    const [religion, setReligion] = useState([]);
    const [educations, setEducations] = useState([]);
    const [employmentStatus, setEmploymentStatus] = useState([]);
    const [classification, setClassification] = useState([]);
    const [illnesses, setIllnesses] = useState([]);
    const [sick, setSick] = useState("");
    const [memberType, setMemberType] = useState("");
    const [formInitValues, setFormInitValues] = useState({});
    const [addr, setAddr] = useState("");
    const [brgy, setBrgy] = useState("");
    const [districtNumber, setDistrictNumber] = useState("");
    const [idNumber, setIdNumber] = useState("");
    const [municipality, setMunicipality] = useState("");
    const [prov, setProv] = useState("BULACAN");
    const [page, setPage] = useState("registration");
    const [regUploadData, setRegUploadData] = useState(null);
    const router = useRouter();
    const [form] = Form.useForm();

    const onRegUpload = async (info) =>
    {
        if (info.file.status !== 'uploading') {
          let src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(info.file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
          setRegUploadData(src);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            setRegUploadData(null);
            message.error(`${info.file.name} file upload failed.`);
        }
    }

    const uploadProps = {
          name: 'identification',
          accept: ".png, .jpeg, .jpg, .gif",
          action: fileURL,
          headers: {
            authorization: 'authorization-text',
          },
          onRemove(info) {
            setRegUploadData(null);
          },
          onChange: onRegUpload,
    };

    const onFinishFailed = (errorInfo) =>
    {
        showNotification('error', 'Invalid Inputs', 'There are some invalid inputs.', 'Please check and provide a valid one.');
    };

    const onFinish = async (values) =>
    {
        setSaveDisabled(true);
        setSaving(true);
        if(idNumber == "limit")
        {
            setSaveDisabled(false);
            setSaving(false);
            message.error('User limit exceeded.');
        } else
        {
            const { stat } = await seniorIdExist(idNumber);
            if(stat == "available")
            {
                setSaveDisabled(false);
                setSaving(false);
                message.error('Name is existing already. Please try again.');
            } else {
                values.data = regUploadData;
                save(values);
                setSaving(false);
            }
        }
    };
    const save = async (values) =>
    {
        const { reg_status } = await register(values);
        values.identification = '';
        if(reg_status == "success")
        {
            let id_msg = `ID No.: ${idNumber}`;
            showNotification('success', 'Successful', 'Registration successful.', id_msg);
            router.push("/");
        } else {
            setSaveDisabled(false);
            message.error('Registration failed.');
        }
    }
    const handleClassification = (value) =>
    {
        let str = "";
        if(value.length > 0) {
            str = value.map(mtype =>{ return mtype.value }).join(",");
        }
        setMemberType(str);
        form.setFieldsValue({
            member_type: str,
        });
    }
    const handleIllness = (value) =>
    {
        let sk = "";
        if(value.length > 0) {
            sk = value.map(sick =>{ return sick.value }).join(",");
        }
        setSick(sk);
        form.setFieldsValue({
            selected_illness: sk,
        });
    }
    const getIdNumber = async (mun, dist) =>
    {
        try
        {
            const { senior_id } = await getGeneratedId(mun, dist);
            setIdNumber(senior_id);
            form.setFieldsValue({
                id_number: senior_id,
            });
        } catch (error)
        {
            setFormLoading(false);
            message.error("Something went wrong.");
        }
    }
    const getAddress = (value, value2) =>
    {
        let brn = value2.children;
        let addrs = `Brgy. ${brn}, ${addr}, ${prov}`;
        setBrgy(brn);
        form.setFieldsValue({
            barangay_name: brn,
        });
        form.setFieldsValue({
            address: addrs,
        });
    }
  const getAllBarangay = async (value, value2) => {
    try {
        setFormLoading(true);
        setMunicipality(value);
        setAddr(value2.children);
        form.setFieldsValue({
            municipality_name: value2.children,
        });
        const { barangays, district_no } = await getBarangays(value);
        setDistrictNumber(district_no);
        form.setFieldsValue({
            district_no: district_no,
        });
        getIdNumber(value, district_no);
        setChosenBarangay(barangays);
        setFormLoading(false);
    } catch (error) {
        setFormLoading(false);
        message.error("Something went wrong.");
    }
  }
  const birthChanged = (date, dateString) =>
  {
        if(IsUnderAge(date))
        {
            showNotification('error', 'Date of Birth Error', 'Please check the birthdate entered.', 'You are not qualified for Senior Citizen membership');
            form.setFieldsValue({
                birth_date: null,
                formatted_bday: null,
            });
        } else
        {
            form.setFieldsValue({
                formatted_bday: formatDate(date, 'YYYY-MM-DD'),
            });
        }
  }
  const getAllData = async () => {
    try {
      setFormLoading(true);
      const {
            status,
            mun,
            genders,
            civil_statuses,
            blood_types,
            religions,
            education,
            employment_statuses,
            classifications,
            illness
        } = await getDetails();

      if(status == "success") {
          setMunicipalities(mun);
          setGender(genders);
          setCivilStatus(civil_statuses);
          setBloodType(blood_types);
          setReligion(religions);
          setEducations(education);
          setEmploymentStatus(employment_statuses);
          setClassification(classifications);
          setIllnesses(illness);
      }
      setFormLoading(false);
    } catch (error) {
      setFormLoading(false);
      message.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <SiteLayout title="Office of the Senior Citizen's Affairs - Registration" setLoading={setFormLoading}>
        <Hero
            heading1="Registration"
            page="registration"
            bgImage="h-screen bg-fixed bg-center bg-cover main-img"
            textWidth="w-180"
        />
        <RegistrationForm
            formInitValues={formInitValues}
            setFormInitValues={setFormInitValues}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            prov={prov}
            setProv={setProv}
            districtNumber={districtNumber}
            setDistrictNumber={setDistrictNumber}
            addr={addr}
            setAddr={setAddr}
            brgy={brgy}
            setBrgy={setBrgy}
            memberType={memberType}
            setMemberType={setMemberType}
            idNumber={idNumber}
            setIdNumber={setIdNumber}
            sick={sick}
            setSick={setSick}
            getAllBarangay={getAllBarangay}
            municipalities={municipalities}
            getAddress={getAddress}
            chosenBarangay={chosenBarangay}
            dtFormat={dtFormat}
            birthChanged={birthChanged}
            gender={gender}
            civilStatus={civilStatus}
            bloodType={bloodType}
            religion={religion}
            educations={educations}
            employmentStatus={employmentStatus}
            handleClassification={handleClassification}
            classification={classification}
            uploadProps={uploadProps}
            handleIllness={handleIllness}
            illnesses={illnesses}
            formLoading={formLoading}
            saving={saving}
            saveDisabled={saveDisabled}
            page={page}
        />
    </SiteLayout>
  )
}
