import React, { useRef, useState, useEffect } from 'react';
import { SearchOutlined, DownloadOutlined, PlusCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Select } from 'antd';
import Highlighter from 'react-highlight-words';
import GroupButton from '../../components/admin/GroupButton';

const DataTable = ({
  handleActivation,
  municipalities,
  title,
  getBarangay,
  getPerBarangay,
  barangay,
  memberData,
  handleExport,
  disableExport,
  showFormModal,
  reloadPage,
  setSelectedItemForEdit,
  getPasswordId,
  setSelectedItemForDelete,
  setShowDeleteModal,
  setShowModal,
  setPage,
  getMemberID,
  handlePrint,
  handleSignature,
  handleCamera,
  handleVaccination,
  adminPage,
  role,
  isEncoder,
  getInformation
}) => {
  const [searchText, setSearchText] = useState('');
  const [columns, setColumns] = useState([]);
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex.replace("_", " ")}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const setAllComponents = () =>
  {
    let col = [];
    if(adminPage == "members") {
      col = [
        {
          title: 'ID Number',
          dataIndex: 'id_number',
          key: 'id_number',
          width: 120,
          responsive: ['md'],
          fixed: 'left',
          ...getColumnSearchProps('id_number'),
          sorter: (a, b) => a.id_number.length - b.id_number.length,
          sortDirections: ['descend', 'ascend'],
          render: (text, record, index) => (
            <a
            onClick={() => getInformation(text) }
            >{text}</a>
          ),
        },
        {
          title: 'Last Name',
          dataIndex: 'last_name',
          width: 100,
          className: 'text-sm',
          responsive: ['md'],
          fixed: 'left',
          key: 'last_name',
          ...getColumnSearchProps('last_name'),
          sorter: (a, b) => a.last_name.length - b.last_name.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'First Name',
          dataIndex: 'first_name',
          responsive: ['md'],
          fixed: 'left',
          width: 100,
          key: 'first_name',
          ...getColumnSearchProps('first_name'),
          sorter: (a, b) => a.first_name.length - b.first_name.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Date of Birth',
          dataIndex: 'birth_date',
          width: 100,
          responsive: ['md'],
          key: 'birth_date',
          ...getColumnSearchProps('birth_date'),
          sorter: (a, b) => a.birth_date.length - b.birth_date.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Age',
          dataIndex: 'age',
          width: 60,
          responsive: ['md'],
          key: 'age',
          ...getColumnSearchProps('age'),
          sorter: (a, b) => a.age.length - b.age.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Province',
          dataIndex: 'province_name',
          width: 70,
          key: 'province_name',
          responsive: ['md'],
          ...getColumnSearchProps('province_name'),
          sorter: (a, b) => a.province_name.length - b.province_name.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Municipality',
          dataIndex: 'municipality_name',
          width: 100,
          key: 'municipality_name',
          responsive: ['md'],
          ...getColumnSearchProps('municipality_name'),
          sorter: (a, b) => a.municipality_name.length - b.municipality_name.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Barangay',
          dataIndex: 'barangay_name',
          width: 100,
          key: 'barangay_name',
          responsive: ['md'],
          ...getColumnSearchProps('barangay_name'),
          sorter: (a, b) => a.barangay_name.length - b.barangay_name.length,
          sortDirections: ['descend', 'ascend'],
        },
      ];
      if(role == 'admin') {
          col.push(
            {
              title: 'Action',
              dataIndex: 'id',
              align: 'center',
              key: 'operation',
              fixed: 'right',
              width: 150,
              render: (text, record, index) => <GroupButton handleVaccination={handleVaccination} memberPage={true} setShowDeleteModal={setShowDeleteModal} handleCamera={handleCamera} handleSignature={handleSignature} handlePrint={handlePrint} getMemberID={getMemberID} setSelectedItemForDelete={setSelectedItemForDelete} setSelectedItemForEdit={setSelectedItemForEdit} setShowModal={setShowModal} setPage={setPage} text={`${text}`} record={`${record}`} index={`${index}`} />,
            }
          );
      }
    } else if(adminPage == "users") {
      col = [
        {
          title: '#',
          dataIndex: 'id_number',
          key: 'index',
          responsive: ["sm"],
          width: 10,
          fixed: 'left',
          render: (text, record, index) => index + 1,
        },
        {
          title: 'First Name',
          dataIndex: 'first_name',
          fixed: 'left',
          responsive: ["sm"],
          width: 30,
          key: 'first_name',
          ...getColumnSearchProps('first_name'),
          sorter: (a, b) => a.first_name.length - b.first_name.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Last Name',
          dataIndex: 'last_name',
          responsive: ["sm"],
          width: 30,
          className: 'text-sm',
          fixed: 'left',
          key: 'last_name',
          ...getColumnSearchProps('last_name'),
          sorter: (a, b) => a.last_name.length - b.last_name.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Email',
          dataIndex: 'email',
          responsive: ["sm"],
          width: 30,
          key: 'email',
          ...getColumnSearchProps('email'),
          sorter: (a, b) => a.email.length - b.email.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Role(s)',
          dataIndex: 'role',
          responsive: ["sm"],
          width: 30,
          key: 'role',
          ...getColumnSearchProps('role'),
          sorter: (a, b) => a.role.length - b.role.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Permission(s)',
          dataIndex: 'permission',
          responsive: ["sm"],
          width: 30,
          key: 'permission',
          ...getColumnSearchProps('permission'),
          sorter: (a, b) => a.permission.length - b.permission.length,
          sortDirections: ['descend', 'ascend'],
        },
        {
          title: 'Action',
          dataIndex: ['id', 'status'],
          align: 'center',
          fixed: 'right',
          responsive: ["sm"],
          key: 'operation',
          width: 30,
          render: (text, row) =>
              <GroupButton handleActivation={handleActivation} getPasswordId={getPasswordId} userPage={true} setShowDeleteModal={setShowDeleteModal} handleCamera={handleCamera} handleSignature={handleSignature} handlePrint={handlePrint} getMemberID={getMemberID} setSelectedItemForDelete={setSelectedItemForDelete} setSelectedItemForEdit={setSelectedItemForEdit} setShowModal={setShowModal} setPage={setPage} text={`${row.id}`} status={`${row.status}`} />
        },
      ];
    }
    setColumns(col);
  }

  useEffect(() => {
    setAllComponents();
  }, []);

  return (
      <div className="flex flex-col">
        <Space size="middle">
          <h1 className="text-2xl">
              {`${title}`}
          </h1>
          <h1 className="text-2xl">
              <ReloadOutlined onClick={reloadPage} className="border p-2 text-lg bg-green-400 drop-shadow-lg rounded-full cursor-pointer" />
          </h1>
        </Space>

            <Space>
              {adminPage == "members" && (
              <>
              <Select
                placeholder="Select municipality here ..."
                style={{ width: '270px' }}
                size="medium"
                onChange={getBarangay}
                >
                {" "}
                <Select.Option value='all'>ALL</Select.Option>
                {municipalities && municipalities.map((item, index) => <Select.Option value={item.municipality_code_number} key={index}>{item.municipality_name}</Select.Option>)}
              </Select>
              <Select
                placeholder="Select barangay here ..."
                style={{ width: '270px' }}
                size="medium"
                onChange={getPerBarangay}
                >
                {" "}
                {barangay && barangay.map((item, index) => <Select.Option className="uppercase" value={item.id} key={index}>{item.barangay_name}</Select.Option>)}
              </Select>
                { !isEncoder && (
                  <Button
                    type="primary"
                    disabled={disableExport}
                    onClick={handleExport}
                    className="rounded-none"
                    icon={<DownloadOutlined />}
                    size='default'>
                    Export
                  </Button>
                )}
              </>
              )}
              <Button
                type="primary"
                onClick={showFormModal}
                className="rounded-none"
                icon={<PlusCircleOutlined />}
                size='default'>
                Add
              </Button>
            </Space>

            <div className="pt-5">
              <Table
                columns={columns}
                dataSource={memberData}
                bordered={true}
                size="small"
                pagination={{
                  position: ['bottomLeft'],
                  pageSize: 5,
                }}
              />
            </div>
      </div>
  );
};
export default DataTable;
