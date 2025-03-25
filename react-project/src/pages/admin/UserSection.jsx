import React, { useEffect, useState } from 'react';
import { Table, Card, Input, Button, Space, Tag, Typography } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import SearchBar from '../../components/admin/header/SearchBar';
import CustomTable from '../../components/CustomTable';
import useFetch from '../../hooks/useFetch';
import CustomModal from '../../components/CustomModal';
import { deleteUser, getAllUsers } from '../../utils/user.utils';
import { showSucessToast } from '../../../../../React/react-training/src/toastify/toastify.utils';
const { Title, Paragraph } = Typography;

const UserSection = () => {
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [data, setData] = useState([])
    const [deleteId, setDeleteId] = useState(null)
    const tableData = data || []

    const showDeleteModal = (id) => {
      setDeleteId(id)
      setIsDeleteOpen(true);
    };
    const handleOk = () => {
      deleteUser(deleteId).then(() => {
        getAllUsers().then((response) => {
          setData(response)
          showSucessToast("User Deleted")
        })
      })
      setIsDeleteOpen(false);
    };
    const handleCancel = () => {
      setIsDeleteOpen(false);
    };

    useEffect(()=> {
      getAllUsers().then((response) => {
        setData(response)
      })
    }, [])

    const columns = [
        {
          title: 'Full Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Number',
          dataIndex: 'number',
          key: 'number',
          responsive: ['md'],
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="small">
              <Button onClick={() => showDeleteModal(record.id)} color='danger' variant="solid">Delete</Button>
              <CustomModal
                title="Are you sure to delete the user?"
                content="This action cannot be undone"
                text="Delete"
                isOpen={isDeleteOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
              />
            </Space>
          ),
        },
      ];

    return (
        <div>
            <Card>
              <Title level={3}>Users</Title>

                <div style={{ marginBottom: 16 }}>
                <Space>
                    <SearchBar/>
                </Space>
                </div>

                <CustomTable tableData={tableData} columns={columns}/>
            </Card>
        </div>
    )
}

export default UserSection
