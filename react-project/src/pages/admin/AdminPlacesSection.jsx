import React, { useState } from 'react';
import { Table, Card, Input, Button, Space, Tag, Typography } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import CustomTable from '../../components/CustomTable';
import SearchBar from '../../components/admin/header/SearchBar';
const { Title, Paragraph } = Typography;

const AdminPlacesSection = () => {
    const guideData = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        name: `Product ${i + 1}`,
        category: ['Electronics', 'Clothing', 'Food', 'Books', 'Toys'][Math.floor(Math.random() * 5)],
        price: Math.floor(Math.random() * 1000) + 10,
        stock: Math.floor(Math.random() * 100),
        status: ['In Stock', 'Low Stock', 'Out of Stock'][Math.floor(Math.random() * 3)],
      }));

    const [tableData, setTableData] = useState(guideData);

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          sorter: (a, b) => a.id - b.id,
        },
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
            { text: 'Electronics', value: 'Electronics' },
            { text: 'Clothing', value: 'Clothing' },
            { text: 'Food', value: 'Food' },
            { text: 'Books', value: 'Books' },
            { text: 'Toys', value: 'Toys' },
          ],
          onFilter: (value, record) => record.category === value,
        },
        {
          title: 'Location',
          dataIndex: 'location',
          key: 'location',
          sorter: (a, b) => a.price - b.price,
          // render: (price) => `$${price.toFixed(2)}`,
          responsive: ['md'],
        },
        {
          title: 'Latitude',
          dataIndex: 'lat',
          key: 'lat',
          sorter: (a, b) => a.stock - b.stock,
          responsive: ['lg'],
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="small">
              <Button type="link" size="small">Edit</Button>
              <Button type="link" size="small" danger>Delete</Button>
            </Space>
          ),
        },
      ];

    return (
        <div>
            <Card>
              <div className='flex justify-between items-center my-2'>
                <Title level={3}>Places</Title>

                <Button type="primary" icon={<PlusOutlined />}>
                      Add Places
                  </Button>
                
              </div>

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

export default AdminPlacesSection
