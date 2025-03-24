import React, { useEffect, useState } from 'react';
import { Table, Card, Input, Button, Space, Tag, Typography } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import SearchBar from '../../components/admin/header/SearchBar';
import CustomTable from '../../components/CustomTable';
import { useNavigate } from 'react-router';
import useFetch from '../../hooks/useFetch';
import CustomModal from '../../components/CustomModal';
import { deleteGuide, getAllGuides } from '../../utils/user.utils';
import { showSucessToast } from '../../../../../React/react-training/src/toastify/toastify.utils';
const { Title, Paragraph } = Typography;

const AdminGuideSection = () => {
    const navigate = useNavigate();
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [data, setData] = useState([])
    const [deleteId, setDeleteId] = useState(null)

    const showDeleteModal = (id) => {
      setDeleteId(id)
      setIsDeleteOpen(true);
    };

    const handleOk = () => {
      deleteGuide(deleteId).then(() => {
        getAllGuides().then((response) => {
          setData(response)
          showSucessToast("Guide Deleted")
        })
      })
      setIsDeleteOpen(false);
    };
    const handleCancel = () => {
      setIsDeleteOpen(false);
    };

    useEffect(()=> {
      getAllGuides().then((response) => {
        setData(response)
      })
    }, [])

     const flattenedData = data.map((guide)=>({
      id: guide.id,
      email: guide.personalDetails.email,
      name: guide.personalDetails.name,
      phone: guide.personalDetails.phone,
      speciality: guide.professionalInfo.speciality,
      experience: guide.professionalInfo.experience,
    }))
  
    const columns = [
        {
          title: 'Name',
          dataIndex: ["personalDetails", 'name'],
          key: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
          render: (text, record) => <a href={`/admin/guideProfile/${record.id}`}>{text}</a>, 

        },
        {
          title: 'Email',
          dataIndex: ["personalDetails", 'email'],
          key: 'email'
        },
        {
          title: 'Phone',
          dataIndex: ["personalDetails", 'phone'],
          key: 'phone',
        },
        {
          title: 'Speciality',
          dataIndex: ["professionalInfo", 'speciality'],
          key: 'speciality',
          filters: [
            { text: 'Adventure & Nature', value: 'Adventure & Nature' },
            { text: 'Cultural & Historical', value: 'Cultural & Historical' },
            { text: 'City & Lifestyle', value: 'City & Lifestyle' },
            { text: 'Outdoor Activities', value: 'Outdoor Activities' },
            { text: 'Others', value: 'Others' },
          ],
          onFilter: (value, record) => record.speciality === value,
        },
        {
          title: 'Document',
          dataIndex: 'document',
          key: 'document',
          render: () => <a className='underline' href="https://www.alexholidays.com/tours/images/credentials/Tourist-Guide-Alex--2016-2018.jpg"> View Document </a>,
          responsive: ['md'],
        },
    
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="small">
              <Button color='danger' onClick={() => showDeleteModal(record.id)} variant="solid">Delete</Button>
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
              <div className='flex justify-between items-center my-2'>
                <Title level={3}>Guides</Title>
                
              </div>

                <div style={{ marginBottom: 16 }}>
                <Space>
                    <SearchBar/>
                </Space>
                </div>

                <CustomTable tableData={data} columns={columns}/>
            </Card>
        </div>
    )
}

export default AdminGuideSection
