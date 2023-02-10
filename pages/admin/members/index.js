import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useReactToPrint } from 'react-to-print';
import AdminLayout from '../../../components/layouts/AdminLayout';
import BarChart from '../../../components/admin/BarChart';
import SuccessAlert from '../../../components/alerts/SuccessAlert';
import VaccinationModal from '../../../components/modal/VaccinationModal';
import InformationModal from '../../../components/modal/InformationModal';
import ModalForm from '../../../components/admin/ModalForm';
import DeleteModal from '../../../components/admin/DeleteModal';
import PrintModal from '../../../components/admin/PrintModal';
import SignatureModal from '../../../components/admin/SignatureModal';
import CameraModal from '../../../components/admin/CameraModal';
import RegistrationForm from '../../../components/forms/RegistrationForm';
import StatisticsCard from '../../../components/admin/StatisticsCard';
import { getMunicipalitiesMembers } from '../../../services/analyticsService';
import { register } from '../../../services/authService';
import DataTable from '../../../components/admin/DataTable';
import ModalLoading from '../../../components/ModalLoading';
import { getDetails, getBarangays, getGeneratedId, seniorIdExist } from '../../../services/dataService';
import { getDosageLevel, getMembers, getExport, getMember, updateMember, deleteMember, userSignature, userCamera, vaccineIdCamera, saveVaccinationInfo, saveMemberTransaction } from '../../../services/memberService';
import { IsUnderAge, showNotification, formatDate } from '../../../services/helperService';
import { dateFormat, uploadURL } from '../../../services/configService';
import { message, Form } from 'antd';
const baseURL = `${process.env.NEXT_PUBLIC_API}`;

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

export default function Member({ dtFormat, fileURL })
{
    const [role, setRole] = useState(Cookies.get('user_role'));
    const [breadcrumb, setBreadcrumb] = useState([]);
    const [memberStatus, setMemberStatus] = useState([]);
    const [municipalities, setMunicipalities] = useState([]);
    const [municipality, setMunicipality] = useState("");
    const [barangay, setBarangay] = useState([]);
    const [illnessDefaultValues, setIllnessDefaultValues] = useState([]);
    const [selectedBarangay, setSelectedBarangay] = useState("");
    const [memberData, setMemberData] = useState([]);
    const [disableExport, setDisableExport] = useState(false);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [formLoading, setFormLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const [form] = Form.useForm();
    const [prov, setProv] = useState("BULACAN");
    const [districtNumber, setDistrictNumber] = useState("");
    const [addr, setAddr] = useState("");
    const [brgy, setBrgy] = useState("");
    const [sick, setSick] = useState();
    const [memberType, setMemberType] = useState("");
    const [formattedBday, setFormattedBday] = useState("");
    const [gender, setGender] = useState([]);
    const [civilStatus, setCivilStatus] = useState([]);
    const [bloodType, setBloodType] = useState([]);
    const [religion, setReligion] = useState([]);
    const [educations, setEducations] = useState([]);
    const [employmentStatus, setEmploymentStatus] = useState([]);
    const [classification, setClassification] = useState([]);
    const [illnesses, setIllnesses] = useState([]);
    const [idNumber, setIdNumber] = useState("");
    const [page, setPage] = useState("add");
    const [isDashboard, setIsDashboard] = useState(false);
    const [isMember, setIsMember] = useState(true);
    const [isUser, setIsUser] = useState(false);
    const [isReport, setIsReport] = useState(false);
    const [chosenBarangay, setChosenBarangay] = useState([]);
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
    const [selectedItemForDelete, setSelectedItemForDelete] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showPrintModal, setShowPrintModal] = useState(false);
    const [showSignatureModal, setShowSignatureModal] = useState(false);
    const [formInitValues, setFormInitValues] = useState({});
    const [selectedItemForSignature, setSelectedItemForSignature] = useState(null);
    const [showCameraModal, setShowCameraModal] = useState(false);
    const [selectedItemForCamera, setSelectedItemForCamera] = useState(null);
    const [selectedItemForPrint, setSelectedItemForPrint] = useState(null);
    const [isEncoder, setIsEncoder] = useState(false);
    const [dosageLevel, setDosageLevel] = useState(null);
    const [showVaccinationModal, setShowVaccinationModal] = useState(false);
    const [showCardSuccess, setShowCardSuccess] = useState(false);
    const [showInformationModal, setShowInformationModal] = useState(false);
    const [selectedItemForVaccine, setSelectedItemForVaccine] = useState(null);
    const [uploadData, setUploadData] = useState(null);
    const [regUploadData, setRegUploadData] = useState(null);
    const [memberInfo, setMemberInfo] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [transaction, setTransaction] = useState([]);
    const componentRef = useRef();
    const componentRefBack = useRef();

    const handlePrinter = useReactToPrint({
        content: () => componentRef.current,
        onAfterPrint: () => {
            saveTransactionInfo();
            handlePrinterBack();
        },
    });

    const handlePrinterBack = useReactToPrint({
        content: () => componentRefBack.current,
        onAfterPrint: () => {
            setShowPrintModal(false);
            router.reload(window.location.pathname);
        },
    });

    const handlePrint = (val) =>
    {
        setSelectedItemForPrint(val);
        setShowPrintModal(true);
    }

    const saveTransactionInfo = async () =>
    {
        const { data } = await saveMemberTransaction({id: selectedItemForPrint});
    }

    const handleVaccination = (val) =>
    {
        setSelectedItemForVaccine(val);
        setShowVaccinationModal(true);
    }

    const getInformation = async (id) =>
    {
        setLoading(true);
        try {
            const { data } = await getMember({id, type: 'info'});
            if(data.user_status == 'success')
            {
                setMemberInfo(data.user);
                console.log(data.transactions);
                setTransaction(data.transactions);
                if(data.photo) {
                    setPhoto(data.photo);
                }
            }
            setLoading(false);
            setShowInformationModal(true);
        } catch (error) {
            setLoading(false);
            message.error("Something went wrong");
        }
    }

    const onVaccineFinish = async (values) =>
    {
        setShowVaccinationModal(false);
        setSaving(true);
        try
        {
            values.id = selectedItemForVaccine;
            values.data = uploadData;
            const { data } = await saveVaccinationInfo(values);
            setSaving(false);
            reloadPage();
        } catch (error)
        {
            setSaving(false);
            message.error("Something went wrong.");
        }
    }

    const closePrint = () =>
    {
        setShowPrintModal(false);
        router.reload(window.location.pathname);
    }

    const handleCamera = (val) =>
    {
        setSelectedItemForCamera(val);
        setShowCameraModal(true);
    }

    const handleSignature = (val) =>
    {
        setSelectedItemForSignature(val);
        setShowSignatureModal(true);
    }

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

    const getMemberID = (val) =>
    {
        setSelectedItemForDelete(val);
        setPage("delete");
        setShowDeleteModal(true);
    }

    const deleteRecord = async () =>
    {
        setShowDeleteModal(false);
        setDeleting(true);
        const { data } = await deleteMember(selectedItemForDelete);
        if(data.delete_status == "success") {
            message.success("Member deleted successfully.");
            router.reload(window.location.pathname);
        } else {
            message.error("Failed to delete this member.");
        }
        setDeleting(false);
    }

    const handleIllness = (values) =>
    {
        let str = "";
        if(values.length > 0) {
            str = values.map(sktype =>{ return sktype.value }).join(",");
        }
        setSick(str);
        form.setFieldsValue({
            selected_illness: str,
        });
    }

    const handleClassification = (values) =>
    {
        let str = "";
        if(values.length > 0) {
            str = values.map(ctype =>{ return ctype.value }).join(",");
        }
        setMemberType(str);
        form.setFieldsValue({
            member_type: str,
        });
    }

    const vaccineDate = (date, dateString) =>
    {
        let fdate = formatDate(date, 'YYYY-MM-DD');
        form.setFieldsValue({
            formatted_vdate: fdate,
        });
    }

    const birthChanged = (date, dateString) =>
    {
        if(IsUnderAge(date))
        {
            showNotification('error', 'Date of Birth Error', 'Please check the birthdate entered.', 'You are not qualified for Senior Citizen membership');
            setFormattedBday(null);
            form.setFieldsValue({
                birth_date: null,
                formatted_bday: null,
            });
        } else
        {
            let fdate = formatDate(date, 'YYYY-MM-DD');
            setFormattedBday(fdate);
            form.setFieldsValue({
                formatted_bday: fdate,
            });
        }
    }

    const reloadPage = () =>
    {
        //window.location.reload();
        router.reload(window.location.pathname);
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

    const onFinishFailed = (errorInfo) =>
    {
        showNotification('error', 'Invalid Inputs', 'There are some invalid inputs.', 'Please check and provide a valid one.');
    };

    const onFinish = async (values) =>
    {
        setSaving(true);
        if(selectedItemForEdit)  {
            values.id = selectedItemForEdit;
            values.formatted_bday = formatDate(values.formatted_bday, 'YYYY-MM-DD');
            const { data } = await updateMember(values);
            setSaving(false);
            message.success('Member updated successfully.');
            router.reload(window.location.pathname);
        } else
        {
            if(idNumber == "limit")
            {
                setSaving(false);
                message.error('User limit exceeded.');
            } else
            {
                const { stat } = await seniorIdExist(idNumber);
                if(stat == "available")
                {
                    setSaving(false);
                    message.error('Name is existing already. Please try again.');
                } else {
                    values.data = regUploadData;
                    save(values);
                    setSaving(false);
                }
            }
        }
    };
    const save = async (values) =>
    {
        const { reg_status } = await register(values);
        values.identification = '';
        setShowModal(false);
        if(reg_status == "success")
        {
            message.success('Member added successfully.');
            router.reload(window.location.pathname)
        } else {
            message.error('Failed to add this member.');
        }
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
            message.error("Something went wrong.");
        }
    }

    const getBarangay = async (value, value2) => {
        try {
            const { barangays } = await getBarangays(value);
            setBarangay(barangays);
            setMunicipality(value);
            let mtype = 'municipality';
            if(value === 'all') {
                mtype = value;
                setBarangay([]);
            }
            getData(mtype, value, '', '');
        } catch (error) {
            message.error("Something went wrong.");
        }
    };
    const getPerBarangay = async (value, value2) => {
        try {
            setSelectedBarangay(value);
            getData('barangay', municipality, value, '');
        } catch (error) {
            message.error("Something went wrong.");
        }
    };
    const getData = async (mtype, mun, bar, stype) =>
    {
        setLoading(true);
        const { data } = await getMembers(mtype, mun, bar, stype);
        if(data.member_status == "success") {
            let members_array = data.members;
            setMunicipalities(data.selectedMunicipalities);
            setMemberData(members_array);
            if(members_array.length === 0) {
                setDisableExport(true);
            } else {
                setDisableExport(false);
            }
        }
        setLoading(false);
    };
    const getAllData = async () => {
    try {
      setFormLoading(true);
      const {
            status,
            genders,
            civil_statuses,
            blood_types,
            religions,
            education,
            employment_statuses,
            classifications,
            member_statuses,
            illness
        } = await getDetails();

      if(status == "success") {
          setGender(genders);
          setCivilStatus(civil_statuses);
          setMemberStatus(member_statuses);
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
    const handleExport = async () =>
    {
        setLoading(true);
        let mtype = "";
        if((municipality) && (selectedBarangay)) {
            mtype = "barangay";
        } else if((municipality) && (!selectedBarangay)) {
            mtype = "municipality";
        }
        const { data } = await getExport(mtype, municipality, selectedBarangay);
        window.open(`${baseURL}/downloadFile/${data}`, '_blank');
        setLoading(false);
    }
    const showFormModal = () =>
    {
        setShowModal(true);
    }
    const getDosage = async () =>
    {
        try
        {
            const { data } = await getDosageLevel();
            if(data.level_status == "success")
            {
                setDosageLevel(data.level);
            }
        } catch (error) {
            message.error("Something went wrong");
        }
    }
    useEffect(() => {
        const roleLabel = `Level: ${role} |`;
        const pmun = router.query.municipality;
        setBreadcrumb([roleLabel, "Dashboard", ">>", "Members"]);
        if(role == 'encoder') {
          setIsEncoder(true);
        }
        if(pmun) {
            getData('municipality', pmun, '', 'str');
        } else {
            getData('all', '', '', '');
        }
        getAllData();
        getDosage();
    }, []);

    return (
        <AdminLayout
            role={role}
            isDashboard={isDashboard}
            isMember={isMember}
            isUser={isUser}
            isReport={isReport}
            title="Administration Panel - Members"
            trail={breadcrumb}>
            {(loading) && (
                <ModalLoading
                      message="Loading, please wait ..."
                      pcolor="bg-yellow-500"
                />
            )}
            {deleting && (
                  <ModalLoading
                      message="Deleting, please wait ..."
                      pcolor="bg-orange-500"
                  />
            )}
            <ModalForm
                mtitle={'Registration'}
                showModal={showModal}
                setShowModal={setShowModal}>
                <RegistrationForm
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    prov={prov}
                    setProv={setProv}
                    districtNumber={districtNumber}
                    addr={addr}
                    brgy={brgy}
                    memberType={memberType}
                    setMemberType={setMemberType}
                    idNumber={idNumber}
                    setAddr={setAddr}
                    sick={sick}
                    setSick={setSick}
                    getAllBarangay={getAllBarangay}
                    setMunicipality={setMunicipality}
                    formattedBday={formattedBday}
                    setFormattedBday={setFormattedBday}
                    municipalities={municipalities}
                    getAddress={getAddress}
                    chosenBarangay={chosenBarangay}
                    setChosenBarangay={setChosenBarangay}
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
                    setFormLoading={setFormLoading}
                    saving={saving}
                    setShowModal={setShowModal}
                    showModal={showModal}
                    memberStatus={memberStatus}
                    selectedItemForEdit={selectedItemForEdit}
                    setSelectedItemForEdit={setSelectedItemForEdit}
                    getMember={getMember}
                    reloadPage={reloadPage}
                    setIllnessDefaultValues={setIllnessDefaultValues}
                    illnessDefaultValues={illnessDefaultValues}
                    formInitValues={formInitValues}
                    setFormInitValues={setFormInitValues}
                    page={page}
                />
            </ModalForm>
            <DeleteModal
                setShowDeleteModal={setShowDeleteModal}
                showDeleteModal={showDeleteModal}
                selectedItemForDelete={selectedItemForDelete}
                mtitle={'Delete Confirmation'}
                deleteRecord={deleteRecord}
                deleting={deleting}
                page={'member'}
            />
            <PrintModal
                setShowPrintModal={setShowPrintModal}
                showPrintModal={showPrintModal}
                selectedItemForPrint={selectedItemForPrint}
                closePrint={closePrint}
                handlePrinter={handlePrinter}
                componentRefBack={componentRefBack}
                componentRef={componentRef}
                mtitle={'Print Confirmation'}
            />
            <SignatureModal
                setShowSignatureModal={setShowSignatureModal}
                showSignatureModal={showSignatureModal}
                selectedItemForSignature={selectedItemForSignature}
                setSaving={setSaving}
                saving={saving}
                userSignature={userSignature}
                mtitle={'Please sign inside the box below:'}
            />
            <CameraModal
                setShowCardSuccess={setShowCardSuccess}
                setShowCameraModal={setShowCameraModal}
                showCameraModal={showCameraModal}
                selectedItemForCamera={selectedItemForCamera}
                setSaving={setSaving}
                saving={saving}
                userCamera={userCamera}
                mtitle={'Please take a photo below:'}
                page={'members'}
            />
            { showVaccinationModal && (
                <VaccinationModal
                    form={form}
                    SuccessAlert={SuccessAlert}
                    showVaccinationModal={showVaccinationModal}
                    setShowVaccinationModal={setShowVaccinationModal}
                    selectedItemForVaccine={selectedItemForVaccine}
                    onVaccineFinish={onVaccineFinish}
                    reloadPage={reloadPage}
                    dosageLevel={dosageLevel}
                    CameraModal={CameraModal}
                    userCamera={vaccineIdCamera}
                    ModalLoading={ModalLoading}
                    saving={saving}
                    setSaving={setSaving}
                    showCameraModal={showCameraModal}
                    setShowCameraModal={setShowCameraModal}
                    fileURL={fileURL}
                    vaccineDate={vaccineDate}
                    setUploadData={setUploadData}
                />
            )}
            { showInformationModal && (
                <InformationModal
                    setShowInformationModal={setShowInformationModal}
                    memberInfo={memberInfo}
                    photo={photo}
                    transaction={transaction}
                    reloadPage={reloadPage}
                />
            )}
            <DataTable
                role={role}
                isEncoder={isEncoder}
                handleVaccination={handleVaccination}
                disableExport={disableExport}
                municipalities={municipalities}
                barangay={barangay}
                memberData={memberData}
                title="List of Senior Citizen Members"
                getBarangay={getBarangay}
                getPerBarangay={getPerBarangay}
                handleExport={handleExport}
                showFormModal={showFormModal}
                reloadPage={reloadPage}
                setSelectedItemForEdit={setSelectedItemForEdit}
                setSelectedItemForDelete={setSelectedItemForDelete}
                setShowDeleteModal={setShowDeleteModal}
                setShowModal={setShowModal}
                setPage={setPage}
                getMemberID={getMemberID}
                handlePrint={handlePrint}
                handleSignature={handleSignature}
                handleCamera={handleCamera}
                getInformation={getInformation}
                adminPage={'members'}
            />
        </AdminLayout>
    );
}
