import React, { useEffect, useState } from 'react';
import { Table, Card, Input, Button, Space, Tag, Typography } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import CustomTable from '../../components/CustomTable';
import SearchBar from '../../components/admin/header/SearchBar';
import { useNavigate } from 'react-router';
import useFetch from '../../hooks/useFetch';
import CustomModal from '../../components/CustomModal';
import { deletePlace, getAllPlaces } from '../../utils/user.utils';
import { showSucessToast } from '../../../../../React/react-training/src/toastify/toastify.utils';
const { Title, Paragraph } = Typography;

const AdminPlacesSection = () => {
    const navigate = useNavigate();
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [fetchData, setFetchData] = useState([])

    const showDeleteModal = (id) => {
      setDeleteId(id)
      setIsDeleteOpen(true);
    };
    
    const handleOk = () => {
      deletePlace(deleteId).then(() => {

        getAllPlaces().then((response)=> {
          setFetchData(response);
          showSucessToast("Place deleted")
        })  
        setIsDeleteOpen(false);

      })
    };

    const handleCancel = () => {
      setIsDeleteOpen(false);
    };

    useEffect(() => {
      getAllPlaces().then((response) => {
            console.log(response)
            setFetchData(response);
      });
    }, [])

    const columns = [
        {
          title: 'Place Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
          render: (text) => <a href="#">{text}</a>,
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
          sorter: (a, b) => a.category.localeCompare(b.category),
          filters: [
            { text: 'Historical', value: 'Historical' },
            { text: 'Religious', value: 'Religious' },
            { text: 'Nature', value: 'Nature' },
            { text: 'Others', value: 'Others' },
          ],
          onFilter: (value, record) => record.category === value,
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Latitude',
          dataIndex: 'latitude',
          key: 'latitude',
          responsive: ['md'],
        },
        {
          title: 'Longitude',
          dataIndex: 'longitude',
          key: 'longitude',
          sorter: (a, b) => a.stock - b.stock,
          responsive: ['lg'],
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="small">
              <Button type="link" onClick={() => navigate(`/admin/editPlace/${record.id}`)}
                variant='solid'>Edit</Button>
              <Button color='danger' onClick={() => showDeleteModal(record.id)} variant="solid">Delete</Button>
              <CustomModal
                title="Are you sure to delete the place?"
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

      const handleAddPlaces = () => {
        navigate('/admin/places/add')
      }

    return (
        <div>
            <Card>
              <div className='flex justify-between items-center my-2'>
                <Title level={3}>Places</Title>

                <Button type="primary" onClick={handleAddPlaces} icon={<PlusOutlined />}>
                      Add Places
                  </Button>
                
              </div>

                <div style={{ marginBottom: 16 }}>
                <Space>
                    <SearchBar/>
                </Space>
                </div>
                <CustomTable tableData={fetchData} columns={columns}/>

            </Card>
        </div>
    )
}

export default AdminPlacesSection
