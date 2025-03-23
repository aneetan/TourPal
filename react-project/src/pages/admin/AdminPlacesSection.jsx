import React, { useState } from 'react';
import { Table, Card, Input, Button, Space, Tag, Typography } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import CustomTable from '../../components/CustomTable';
import SearchBar from '../../components/admin/header/SearchBar';
import { useNavigate } from 'react-router';
import useFetch from '../../hooks/useFetch';
const { Title, Paragraph } = Typography;

const AdminPlacesSection = () => {
    const navigate = useNavigate();
    const{error, loading, data} = useFetch("http://localhost:3000/places");

    const placeData = data || []

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
              <Button type="link" variant='solid'>Edit</Button>
              <Button color='danger' variant="solid">Delete</Button>
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
                <CustomTable tableData={placeData} columns={columns}/>

            </Card>
        </div>
    )
}

export default AdminPlacesSection
