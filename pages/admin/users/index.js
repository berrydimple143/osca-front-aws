import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { message, Form } from 'antd';
import Cookies from 'js-cookie';
import * as cookie from 'cookie';
import AdminLayout from '../../../components/layouts/AdminLayout';
import DataTable from '../../../components/admin/DataTable';
import Modal from '../../../components/modal/Modal';
import PasswordModal from '../../../components/modal/PasswordModal';
import ActivationModal from '../../../components/modal/ActivationModal';
import DeleteModal from '../../../components/admin/DeleteModal';
import ModalLoading from '../../../components/ModalLoading';
import FillupForm from '../../../components/forms/FillupForm';
import { getUsers, saveUser, getUser, updateUser, deleteUser, emailExist, changePassword, getUserStatus, activateAccount } from '../../../services/userService';
import { getRoles } from '../../../services/roleService';
import { getMembers } from '../../../services/memberService';

export default function User()
{
    const [role, setRole] = useState(Cookies.get('user_role'));
    const [breadcrumb, setBreadcrumb] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formLoading, setFormLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [activating, setActivating] = useState(false);
    const [activationMessage, setActivationMessage] = useState("");
    const [activationColor, setActivationColor] = useState("");
    const [inputStatus, setInputStatus] = useState("warning");
    const [selectedItemForEdit, setSelectedItemForEdit] = useState("");
    const [page, setPage] = useState("add");
    const [isDashboard, setIsDashboard] = useState(false);
    const [isMember, setIsMember] = useState(false);
    const [isUser, setIsUser] = useState(true);
    const [isReport, setIsReport] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [changing, setChanging] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showActivationModal, setShowActivationModal] = useState(false);
    const [hasMunicipality, setHasMunicipality] = useState(false);
    const [selectedItemForDelete, setSelectedItemForDelete] = useState("");
    const [selectedItemForPassword, setSelectedItemForPassword] = useState("");
    const [selectedItemForActivation, setSelectedItemForActivation] = useState("");
    const [userStatus, setUserStatus] = useState("");
    const [memberData, setMemberData] = useState([]);
    const [roleData, setRoleData] = useState([]);
    const [formInitValues, setFormInitValues] = useState({});
    const [municipalities, setMunicipalities] = useState([]);
    const [municipalityName, setMunicipalityName] = useState("");
    const router = useRouter();
    const [form] = Form.useForm();

    const getData = async () =>
    {
        setLoading(true);
        const { data } = await getUsers();
        if(data.user_status == "success") {
            setMemberData(data.users);
        }
        setLoading(false);
    };

    const handleMunicipality = (val) =>
    {
        if(val == "encoder" || val == "team lead")
        {
            setHasMunicipality(true);
        } else
        {
            setHasMunicipality(false);
        }
    }

    const handleSelectedMunicipalities = (value) =>
    {
        let str = "";
        if(value.length > 0) {
            str = value.map(mtype =>{ return mtype.value }).join(",");
        }
        form.setFieldsValue({
            selected_municipalities: str,
        });
    }

    const getPasswordId = (val) =>
    {
        setSelectedItemForPassword(val);
        setShowPasswordModal(true);
    }

    const getMemberID = (val) =>
    {
        setSelectedItemForDelete(val);
        setShowDeleteModal(true);
    }

    const checkEmail = async (e) =>
    {
        const { data } = await emailExist(e.target.value, page, selectedItemForEdit);
        if(data.email_status == "found") {
            message.error("Email already exist.");
            if(page == 'add') {
                form.setFieldsValue({
                    email: ''
                });
            } else {
                form.setFieldsValue({
                    email: data.email
                });
            }
        }
    }

    const deleteRecord = async () =>
    {
        setShowDeleteModal(false);
        setDeleting(true);
        const { data } = await deleteUser(selectedItemForDelete);
        if(data.delete_status == "success") {
            message.success("User deleted successfully.");
            router.reload(window.location.pathname);
        } else {
            message.error("Failed to delete this user.");
        }
        setDeleting(false);
    }

    const getRoleData = async () =>
    {
        const { data } = await getRoles();
        if(data.role_status == "success") {
            setRoleData(data.roles);
        }
    };

    const onFinishFailed = (errorInfo) =>
    {
        message.error('There are some invalid inputs.');
    };

    const reloadPage = () =>
    {
        router.reload(window.location.pathname);
    }

    const activateRecord = async () =>
    {
        let msg = 'Activating account, please wait ...';
        let clr = 'bg-green-500';
        let successMsg = "Activation successful.";
        if(userStatus == 1 || userStatus == '1') {
            msg = 'De-activating account, please wait ...';
            clr = 'bg-red-500';
            successMsg = "De-activation successful.";
        }
        setActivationMessage(msg);
        setActivationColor(clr);
        setShowActivationModal(false);
        setActivating(true);
        try
        {
            const { data } = await activateAccount(selectedItemForActivation, userStatus);
            setActivating(false);
            message.success(successMsg);
            reloadPage();
        } catch (error)
        {
            setActivating(false);
            message.error("Something went wrong.");
        }
    }

    const handleActivation = async (id) =>
    {
        setLoading(true);
        setSelectedItemForActivation(id);
        try
        {
            const { data } = await getUserStatus(id);
            setUserStatus(data.user_status);
            let pg = "Are you sure you want to activate this user?";
            if(data.user_status == 1 || data.user_status == '1')
            {
                pg = "Are you sure you want to de-activate this user?";
            }
            setPage(pg);
            setLoading(false);
            setShowActivationModal(true);
        } catch (error)
        {
            setLoading(false);
            message.error("Something went wrong.");
        }
    }

    const showFormModal = () =>
    {
        setShowModal(true);
    }

    const onPasswordFinish = async (values) =>
    {
        setShowPasswordModal(false);
        setChanging(true);
        if(selectedItemForPassword) {
            values.id = selectedItemForPassword;
            values.type = 'user';
            const { data } = await changePassword(values);
            setChanging(false);
            message.success('Password changed successfully.');
            router.reload(window.location.pathname);
        }
    }

    const onFinish = async (values) =>
    {
        setSaving(true);
        if(selectedItemForEdit)  {
            values.id = selectedItemForEdit;
            const { data } = await updateUser(values);
            setSaving(false);
            if(data.update_status == "success") {
                message.success('User updated successfully.');
            } else {
                message.error('User update failed.');
            }
            router.reload(window.location.pathname);
        } else {
            try
            {
                const { register_status } = await saveUser(values);
                console.log(register_status);
                setSaving(false);
                if(register_status == "success") {
                    message.success("User created successful.");
                    router.reload(window.location.pathname);
                } else {
                    message.error("User creation failed.");
                }
            } catch (error)
            {
                setSaving(false);
                message.error("Something went wrong.");
            }
        }
    }

    const getMunicipalities = async (mtype, mun, bar, stype) =>
    {
        const { data } = await getMembers(mtype, mun, bar, stype);
        if(data.member_status == "success") {
            setMunicipalities(data.selectedMunicipalities);
        }
    };

    useEffect(() => {
        if(role !== "admin")
        {
            router.push('/admin');
        } else {
            const roleLabel = `Level: ${role} |`;
            setBreadcrumb([roleLabel, "Dashboard", ">>", "Users"]);
            getData();
            getRoleData();
            getMunicipalities('all', '', '', '');
        }
    }, []);
    return (
        <AdminLayout
            role={role}
            isDashboard={isDashboard}
            isMember={isMember}
            isUser={isUser}
            isReport={isReport}
            title="Administration Panel - Users"
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
            {changing && (
                  <ModalLoading
                      message="Updating, please wait ..."
                      pcolor="bg-green-500"
                  />
            )}
            {(activating) && (
                <ModalLoading
                      message={`${activationMessage}`}
                      pcolor={`${activationColor}`}
                />
            )}
            <Modal
                mtitle={'User'}
                showModal={showModal}
                setShowModal={setShowModal}>
                <FillupForm
                    setHasMunicipality={setHasMunicipality}
                    handleSelectedMunicipalities={handleSelectedMunicipalities}
                    municipalities={municipalities}
                    handleMunicipality={handleMunicipality}
                    hasMunicipality={hasMunicipality}
                    checkEmail={checkEmail}
                    roleData={roleData}
                    form={form}
                    getUser={getUser}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    setFormLoading={setFormLoading}
                    formLoading={formLoading}
                    saving={saving}
                    loading={loading}
                    setShowModal={setShowModal}
                    reloadPage={reloadPage}
                    formInitValues={formInitValues}
                    setFormInitValues={setFormInitValues}
                    selectedItemForEdit={selectedItemForEdit}
                    title={'Please fill-up the form completely'}
                />
            </Modal>
            <DeleteModal
                setShowDeleteModal={setShowDeleteModal}
                showDeleteModal={showDeleteModal}
                selectedItemForDelete={selectedItemForDelete}
                mtitle={'Delete Confirmation'}
                deleteRecord={deleteRecord}
                deleting={deleting}
                page={'user'}
            />
            <PasswordModal
                form={form}
                setShowPasswordModal={setShowPasswordModal}
                showPasswordModal={showPasswordModal}
                onPasswordFinish={onPasswordFinish}
                selectedItemForPassword={selectedItemForPassword}
                reloadPage={reloadPage}
            />
            <ActivationModal
                selectedItemForActivation={selectedItemForActivation}
                showActivationModal={showActivationModal}
                setShowActivationModal={setShowActivationModal}
                activateRecord={activateRecord}
                page={page}
            />
            <DataTable
                handleActivation={handleActivation}
                getMemberID={getMemberID}
                memberData={memberData}
                reloadPage={reloadPage}
                setSelectedItemForEdit={setSelectedItemForEdit}
                getPasswordId={getPasswordId}
                setPage={setPage}
                setShowModal={setShowModal}
                title="List of Users"
                showFormModal={showFormModal}
                adminPage={'users'}
            />
        </AdminLayout>
    );
}
